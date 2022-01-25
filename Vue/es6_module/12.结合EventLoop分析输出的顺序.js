import thenfs from 'then-fs';

console.log('A');
thenfs.readFile('./files/1.txt', 'utf-8').then((r1) => {
  console.log('B');
})
thenfs.readFile('./files/1.txt', 'utf-8').then((r1) => {
  console.log('E');
})
thenfs.readFile('./files/1.txt', 'utf-8').then((r1) => {
  console.log('F');
})

setTimeout(() => {
  console.log('C');
},0);
console.log('D');