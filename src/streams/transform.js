import { stdin, stdout } from 'node:process';

const transform = async () => {
  stdin.on('data', (data) => {
    stdout.write(data.toString().split('').reverse().join('') + '\n');
  });
};

await transform();
