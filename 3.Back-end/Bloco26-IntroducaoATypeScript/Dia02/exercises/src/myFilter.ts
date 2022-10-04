type Callback<T> = (item: T, index?: number, array?: Array<T>) => boolean;

const myFilter = <T>(array: Array<T>, callback: Callback<T>): Array<T> => {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

console.log(myFilter<number>([1, 2, 3], (item) => item < 3));

console.log(myFilter<string>(['a', 'b', 'c'], (item) => item !== 'a'));
