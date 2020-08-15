const [n, m] = [1, 7];
console.log(n, m) // 1 7

const obj = {name: 'Taro', age: '94'}
const { name, age} = obj
console.log(name, age) // Taro 94

const arr1 = ['A', 'B', 'C'];
const arr2 = [...arr1, 'D', 'E'];
console.log(arr2); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1, d: 4, e: 5 };
console.log(obj2); // { a: 1, b: 2, c: 3, d: 4, e: 5 }

const foo = 65536;
const obj3 = { foo, bar: 4096 };
console.log(obj3); // { foo: 65536, bar: 4096 }

// =======================================

const wakeUp = ms => {
    setTimeout(() => { console.log(' 起きた (bad)'); }, ms);
    };
    const greet = () => {
    console.log('おやすみ (bad)');
    wakeUp(2000);
    console.log('おはよう！  (bad)');
}
greet();

// =======================================

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const greet2 = async () => {
  console.log('おやすみ (good)');
  try {
    await sleep(2000);
    console.log('起きた (good)');
    console.log('おはよう！  (good)');
  } catch (err) {
    console.error('睡眠例外です: ', err);
  }
}
greet2();

// =======================================
