import { Client, Account } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('687617b900303b350209');

const account = new Account(client);

export { client, account }; 