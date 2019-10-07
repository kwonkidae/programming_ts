import Worker from 'worker-loader!./file.worker';
const worker = new Worker();
worker.onmessage = e => {
}
// worker.postMessage('some data');
