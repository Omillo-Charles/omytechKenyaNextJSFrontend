import { databases, storage, account, ID } from './appwrite';
import { Permission, Role } from 'appwrite';
import { Query } from 'appwrite'; // Uncomment if you want to use queries

const DATABASE_ID = '687a08cf000db9a0dee5';
const PROJECTS_COLLECTION_ID = '687a08fa002515aec2bb';
const BUCKET_ID = '68776acb00320d669994';
const NOTIFICATIONS_COLLECTION_ID = '687a20ad00287fc85d46';

// List of allowed admin emails
const ADMIN_EMAILS = [
  'fidelomillo812@gmail.com',
  'fidelomillo1@gmail.com',
  'omytechteam@gmail.com',
  'omytechkenya@gmail.com',
];

// Use email as id and name for now
const ADMINS = ADMIN_EMAILS.map(email => ({ id: email, name: email, email }));

export async function fetchUserProjects() {
  const user = await account.get();
  const response = await databases.listDocuments(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
    [
      // Query.equal('clientId', user.$id)
    ]
  );
  return response.documents;
}

export async function createProject(form: {
  name: string;
  phone: string;
  description: string;
  budget: number | string;
  deadline: string;
  colors: string[];
  files: File[];
}) {
  // 1. Get current user
  const user = await account.get();
  const userPermissions = [
    Permission.read(Role.user(user.$id)),
    Permission.update(Role.user(user.$id)),
    Permission.delete(Role.user(user.$id)),
    Permission.write(Role.user(user.$id)),
  ];

  // 2. Pick a random admin
  const randomAdmin = ADMINS[Math.floor(Math.random() * ADMINS.length)];

  // 3. Upload files with permissions
  const fileIds = [];
  for (const file of form.files) {
    const uploaded = await storage.createFile(BUCKET_ID, ID.unique(), file, userPermissions);
    fileIds.push(uploaded.$id);
  }

  // 4. Create project document with permissions and admin info
  const project = await databases.createDocument(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
    ID.unique(),
    {
      name: form.name,
      phone: form.phone,
      description: form.description,
      budget: Number(form.budget),
      deadline: form.deadline,
      colors: form.colors,
      files: fileIds,
      clientId: user.$id,
      adminId: randomAdmin.id,
      adminName: randomAdmin.name,
      adminEmail: randomAdmin.email,
      status: 'Not Started', // Add default status
    },
    userPermissions
  );

  // 5. Create a notification for the user
  await databases.createDocument(
    DATABASE_ID,
    NOTIFICATIONS_COLLECTION_ID,
    ID.unique(),
    {
      userId: user.$id,
      message: `Project "${form.name}" created successfully on ${new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}.`,
      projectId: project.$id,
      read: false,
    },
    userPermissions
  );

  return project;
}

export async function fetchUserNotifications() {
  const user = await account.get();
  const response = await databases.listDocuments(
    DATABASE_ID,
    NOTIFICATIONS_COLLECTION_ID,
    [Query.equal('userId', user.$id)]
  );
  return response.documents;
}

export async function deleteProject(projectId: string) {
  const user = await account.get();
  const userPermissions = [
    Permission.read(Role.user(user.$id)),
    Permission.update(Role.user(user.$id)),
    Permission.delete(Role.user(user.$id)),
    Permission.write(Role.user(user.$id)),
  ];
  return databases.deleteDocument(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
    projectId
  );
}

export async function updateProject(projectId: string, data: Partial<{
  name: string;
  phone: string;
  description: string;
  budget: number | string;
  deadline: string;
  colors: string[];
  files: string[];
  status: string;
}>) {
  return databases.updateDocument(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
    projectId,
    data
  );
} 