import { databases, storage, account, ID } from './appwrite';
import { Permission, Role } from 'appwrite';
import { Query } from 'appwrite'; // Uncomment if you want to use queries

// TODO: Set your new Appwrite Database, Collection, Bucket, and Notification Collection IDs here after recreating them in the Appwrite UI
export const DATABASE_ID = '687b60ec000956aae933';
export const PROJECTS_COLLECTION_ID = '687b61a1002932c8d3f0';
export const BUCKET_ID = '687b63f7001b241df161';
export const NOTIFICATIONS_COLLECTION_ID = '687b6ec300367ae00486';

// List of allowed admin emails
const ADMIN_EMAILS = [
  'fidelomillo812@gmail.com',
  'fidelomillo1@gmail.com',
  'omytechteam@gmail.com',
  'omytechkenya@gmail.com',
];

// Use email as id and name for now
export const ADMINS = [
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
  const userId = user.$id;
  // Appwrite-recommended permissions: only the current user can read/write
  const userPermissions = [
    Permission.read(`user:${userId}`),
    Permission.write(`user:${userId}`),
  ];
  console.log('user:', user);
  console.log('userPermissions:', userPermissions);

  // 2. Pick a random admin
  const randomAdmin = ADMINS[Math.floor(Math.random() * ADMINS.length)];

  // 3. Upload files with permissions
  const fileIds = [];
  for (const file of form.files) {
    console.log('Uploading file with permissions:', userPermissions);
    const uploaded = await storage.createFile(BUCKET_ID, ID.unique(), file, userPermissions);
    fileIds.push(uploaded.$id);
  }

  // 4. Create project document with permissions and admin info
  console.log('Creating project document with permissions:', userPermissions);
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
      userId: userId,
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
    [
      // Only fetch notifications for the logged-in user
      // Query.equal('userId', user.$id)
    ]
  );
  // Filter client-side for now
  return response.documents.filter((n: any) => n.userId === user.$id);
}

export async function deleteProject(projectId: string) {
  const user = await account.get();
  const userId = user.$id;
  // Appwrite-recommended permissions: only the current user can read/write
  const userPermissions = [
    Permission.read(`user:${userId}`),
    Permission.write(`user:${userId}`),
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
  // Appwrite-recommended permissions: only the notification user can read/write
  const userPermissions = [
    Permission.read(`user:${userId}`),
    Permission.write(`user:${userId}`),
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
  // Use the exported DATABASE_ID and PROJECTS_COLLECTION_ID
  const updated = await databases.updateDocument(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
    projectId,
    data
  );
  // Send notifications for status change or edit
  if (data.status) {
    // Fetch the updated project to get clientId and adminId
    const project = await databases.getDocument(
      DATABASE_ID,
      PROJECTS_COLLECTION_ID,
      projectId
    );
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
    const project = await databases.getDocument(
      DATABASE_ID,
      PROJECTS_COLLECTION_ID,
      projectId
    );
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