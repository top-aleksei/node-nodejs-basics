import { readdir } from 'node:fs/promises';
import { access } from 'node:fs';
import path from 'node:path';

const list = async () => {
  const { dirname } = import.meta;
  const folderPath = path.join(dirname, 'files');

  access(folderPath, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }
  });

  const files = await readdir(folderPath);
  console.log(files);
};

await list();
