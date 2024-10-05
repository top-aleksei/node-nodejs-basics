import { createReadStream } from 'node:fs';
import path from 'node:path';
import { stdout } from 'node:process';

const read = async () => {
  const { dirname } = import.meta;
  const filePath = path.join(dirname, 'files', 'fileToRead.txt');
  const readStream = createReadStream(filePath, { encoding: 'utf-8' });

  readStream.on('data', (data) => {
    stdout.write(data);
  });
  readStream.on('end', () => {
    console.log('\n');
  });
};

await read();
