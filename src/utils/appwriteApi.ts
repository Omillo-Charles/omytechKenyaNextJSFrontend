import { Client, Account, Databases, Storage, ID, Permission, Role } from 'appwrite';

// PLACEHOLDER IDs - replace with your real Appwrite values later
export const APPWRITE_ENDPOINT = 'https://fra.cloud.appwrite.io/v1';
export const APPWRITE_PROJECT_ID = '687617b900303b350209';
export const DATABASE_ID = '687768b50016e3e79cce';
export const PROJECTS_COLLECTION_ID = '687768f80014da8633ac';
export const MESSAGES_COLLECTION_ID = '6877712e0023460ea821';
export const STORAGE_BUCKET_ID = '68776acb00320d669994';

const client = new Client();
client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export { Permission };
export { Role };

// Project CRUD
export async function createProject(data: any, userId: string) {
  const permissions = [
    Permission.read(`user:${userId}`),
    Permission.update(`user:${userId}`),
    Permission.delete(`user:${userId}`),
    Permission.read(Role.team('admins')),
    Permission.update(Role.team('admins')),
  ];
  return databases.createDocument(
    DATABASE_ID,
    PROJECTS_COLLECTION_ID,
    ID.unique(),
    data,
    permissions
  );
}

export async function getProjects(query: any[] = []) {
  return databases.listDocuments(DATABASE_ID, PROJECTS_COLLECTION_ID, query);
}

export async function getProjectById(projectId: string) {
  return databases.getDocument(DATABASE_ID, PROJECTS_COLLECTION_ID, projectId);
}

export async function updateProject(projectId: string, data: any) {
  return databases.updateDocument(DATABASE_ID, PROJECTS_COLLECTION_ID, projectId, data);
}

export async function deleteProject(projectId: string) {
  return databases.deleteDocument(DATABASE_ID, PROJECTS_COLLECTION_ID, projectId);
}

// File upload
export async function uploadFile(file: File, userId: string) {
  return storage.createFile(
    STORAGE_BUCKET_ID,
    ID.unique(),
    file,
    [
      Permission.read(`user:${userId}`),
      Permission.update(`user:${userId}`),
      Permission.delete(`user:${userId}`),
    ]
  );
}

export function getFilePreview(fileId: string) {
  return storage.getFilePreview(STORAGE_BUCKET_ID, fileId);
}

// Messages (Chat)
export async function sendMessage(data: any) {
  return databases.createDocument(DATABASE_ID, MESSAGES_COLLECTION_ID, ID.unique(), data);
}

export async function getMessages(projectId: string) {
  // You may want to filter by projectId
  return databases.listDocuments(DATABASE_ID, MESSAGES_COLLECTION_ID, [
    // e.g. Query.equal('projectId', projectId)
  ]);
} 