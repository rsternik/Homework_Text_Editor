//import for indexedDB
import { openDB } from 'idb';

//init database
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: false });
      console.log('jate database created');
    },
  });

//Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    console.log(content)
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.put({ content: content, id: 1})
    const result = await request;
    console.log('data saved to the database', result);
  }
  catch {
    console.error('put failed')
  }
}

//Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.getAll();
    const result = await request;
    console.log('result.value', result[0].content);
    return result[0].content;
  }
  catch {
    console.error('get failed')
  }
}

//start the database
initdb();
