import path from 'node:path';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

const calculateHash = async () => {
  const { dirname } = import.meta;
  const fileToHashPath = path.join(dirname, 'files', 'fileToCalculateHashFor.txt');

  const hash = createHash('sha256');
  const readStream = createReadStream(fileToHashPath);

  readStream.on('data', (data) => {
    hash.update(data);
  });

  readStream.on('end', () => {
    console.log(hash.digest('hex'));
  });
};

await calculateHash();
