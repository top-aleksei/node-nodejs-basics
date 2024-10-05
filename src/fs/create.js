import { writeFile } from 'node:fs/promises';
import { access } from 'node:fs';
import path from 'node:path';

const create = async () => {
  const { dirname } = import.meta;
  const filePath = path.join(dirname, 'files', 'fresh.txt');

  access(filePath, (err) => {
    if (!err) {
      throw new Error('FS operation failed');
    }
  });

  writeFile(filePath, 'I am fresh and young');
};

await create();
