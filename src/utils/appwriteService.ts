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
const ADMINS = [
  { id: '687621604388496ea7a9', name: 'fidelomillo812@gmail.com', email: 'fidelomillo812@gmail.com' },
  { id: '687a29d322770b3cbbcc', name: 'omytechteam@gmail.com', email: 'omytechteam@gmail.com' },
  { id: '687a3078d985f6e4b00c', name: 'fidelomillo1@gmail.com', email: 'fidelomillo1@gmail.com' },
  { id: '687a316f29b145ca24d6', name: 'omytechkenya@gmail.com', email: 'omytechkenya@gmail.com' },
];

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

  // 5. Create notifications for both client and admin
  const message = `Project "${form.name}" created successfully on ${new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}.`;
  await Promise.all([
    sendNotification({
      userId: user.$id,
      message,
      projectId: project.$id,
    }),
    sendNotification({
      userId: randomAdmin.id,
      message: `A new project "${form.name}" was assigned to you on ${new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}.`,
      projectId: project.$id,
    })
  ]);
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
  // Fetch the project to get clientId, adminId, and name before deleting
  const project = await databases.getDocument(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
    projectId
  );
  const deleted = await databases.deleteDocument(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
    projectId
  );
  // Send notifications to client and admin
  await Promise.all([
    sendNotification({
      userId: project.clientId,
      message: `Your project "${project.name}" was deleted by the admin.`,
      projectId: projectId,
    }),
    sendNotification({
      userId: project.adminId,
      message: `The project "${project.name}" assigned to you was deleted.`,
      projectId: projectId,
    })
  ]);
  return deleted;
}

export async function sendNotification({ userId, message, projectId }: { userId: string, message: string, projectId?: string }) {
  // Use user-level permissions for the notification
  const userPermissions = [
    Permission.read(Role.user(userId)),
    Permission.update(Role.user(userId)),
    Permission.delete(Role.user(userId)),
    Permission.write(Role.user(userId)),
  ];
  return databases.createDocument(
    DATABASE_ID,
    NOTIFICATIONS_COLLECTION_ID,
    ID.unique(),
    {
      userId,
      message,
      projectId,
      read: false,
    },
    userPermissions
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
  // Fetch the project to get clientId, adminId, and name
  const project = await databases.getDocument(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
    projectId
  );
  const updated = await databases.updateDocument(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
    projectId,
    data
  );
  // If status is being changed, send notifications to client and admin
  if (data.status && data.status !== project.status) {
    await Promise.all([
      sendNotification({
        userId: project.clientId,
        message: `The status of your project "${project.name}" was changed to "${data.status}" by the admin.`,
        projectId: projectId,
      }),
      sendNotification({
        userId: project.adminId,
        message: `You changed the status of project "${project.name}" to "${data.status}".`,
        projectId: projectId,
      })
    ]);
  } else if (Object.keys(data).length > 0) {
    await Promise.all([
      sendNotification({
        userId: project.clientId,
        message: `Your project "${project.name}" was edited by the admin.`,
        projectId: projectId,
      }),
      sendNotification({
        userId: project.adminId,
        message: `You edited the project "${project.name}".`,
        projectId: projectId,
      })
    ]);
  }
  return updated;
} 