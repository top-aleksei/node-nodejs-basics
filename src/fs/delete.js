import { unlink } from 'node:fs/promises';
import { access } from 'node:fs';
import path from 'node:path';

const remove = async () => {
  const { dirname } = import.meta;
  const fileToRemovePath = path.join(dirname, 'files', 'fileToRemove.txt');

  access(fileToRemovePath, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    unlink(fileToRemovePath);
  });
};

await remove();
