const people = [
  { id: 2, name: 'Zack', age: 35 },
  { id: 3, name: 'Peter', age: 47 },
  { id: 1, name: 'John', age: 41 }
]

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

const people2 = [
  { id: 1, name: 'one', age: 41 },
  { id: 3, name: 'three' },
  { id: 2, name: 'two', age: 35 }
]
// Не работает сортировка если одного ключа нет
people2.sort((a, b) => a.age - b.age);
console.log(people2);
