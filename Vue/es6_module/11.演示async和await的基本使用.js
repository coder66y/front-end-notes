import thenfs from 'then-fs';
console.log('A');
async function getAllFiles() {
  console.log('D');

  const r1 = await thenfs.readFile('./files/1.txt', 'utf-8');
  console.log(r1);
  const r2 = thenfs.readFile('./files/2.txt', 'utf-8');
  console.log(r2);

  const r3 = await thenfs.readFile('./files/3.txt', 'utf-8');
  console.log(r3);
  
  thenfs.readFile('./files/3.txt', 'utf-8').then((r3)=> {
    console.log(r3);
  });
  console.log('E');
}
console.log('B');

getAllFiles();
console.log('C');