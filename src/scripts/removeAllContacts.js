import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  console.log('Removing all contacts...'); 
  await writeContacts([]);
  console.log('All contacts removed successfully!');
};

await removeAllContacts();