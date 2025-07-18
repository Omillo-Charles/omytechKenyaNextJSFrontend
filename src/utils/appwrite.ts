import { Client, Account, Databases, Storage, ID } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // <-- Replace with your endpoint
  .setProject('687617b900303b350209'); // <-- Replace with your project ID

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, account, databases, storage, ID }; 