const People = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'San Francisco' },
    { name: 'Charlie', age: 22, city: 'Los Angeles' },
    { name: 'David', age: 28, city: 'Chicago' },
    { name: 'Eva', age: 35, city: 'Miami' },
    { name: 'Frank', age: 40, city: 'Seattle' },
    { name: 'Grace', age: 33, city: 'Austin' },
    { name: 'Henry', age: 29, city: 'Denver' },
    { name: 'Ivy', age: 26, city: 'Boston' },
    { name: 'Jack', age: 31, city: 'Portland' }
  ];

let youngPeople = People.filter((x)=>{
  return x.age < 30
});

console.log(youngPeople)

let name = People.map((x)=>{
let person = x.name;
console.log(person)
})

let totalAge = People.reduce((acc,curr)=>{
  return acc += curr.age;
},0);

console.log(totalAge)

let sortedAge = People.sort((a,b)=>{
    if(a.age<b.age){
        return -1;
    }

})
console.log(sortedAge)


let found = People.find((x)=>{
 return x.age == 35;
});

console.log(found)