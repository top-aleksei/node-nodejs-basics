import path from 'node:path';
import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
  const { dirname } = import.meta;
  const workerPath = path.join(dirname, 'worker.js');
  const cores = cpus().length;

  const createWorkerPromise = (data) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData: data });
      worker.on('message', (data) => resolve({ status: 'resolved', data }));
      worker.on('error', () => reject({ status: 'error', data: null }));
    });
  };

  const result = await Promise.all(
    Array.from({ length: cores }).map((_, index) => createWorkerPromise(index + 10)),
  );

  console.log(result);
};

await performCalculations();
