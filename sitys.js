// масивы 
// задача міста

let usity;
let sity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   sity[1] = prompt('enter a sity 1');
   sity[2] = prompt('enter a sity 2');
   sity[3] = prompt('enter a sity 3');
   sity[4] = prompt('enter a sity 4');
   sity[5] = prompt('enter a sity 5');
   sity[6] = prompt('enter a sity 6');
   sity[7] = prompt('enter a sity 7');
   sity[8] = prompt('enter a sity 8');
   sity[9] = prompt('enter a sity 9');
   sity[10] =prompt('enter a sity 10');

   usity = prompt('you sity?');
   we:
   do{
       i = 1;
       sity[i];
     if(usity == sity[i]) {
         console.log('i know you sity');
         break we;
     } else {
         console.log(' idk you sity');
         break we;
     }
       i++;

   } while(i <= 10);


name: Node.js CI

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
      env:
        CI: true
