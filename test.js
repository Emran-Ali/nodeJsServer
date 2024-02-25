const arr = [1, 2, 3, 4, 6];

const b = ['a', 'b', 'c'];

const arr3 = arr.copyWithin(0, 3, 4);

b[3] = 'd';

const str = 'Emran';
// str.slice(2, 'T');
console.dir(arr.entries());

// arr[6] = 'emran';
// b.unshift('c');
// console.log(arr);
// console.log(Object.keys(arr));
// const it1 = arr[Symbol.iterator]();
// console.log(it1.next());
// for (const v of it1) {
//     console.log(v);
// }
// console.log(arr.at(-1));

console.log(arr3);
console.log(b);
