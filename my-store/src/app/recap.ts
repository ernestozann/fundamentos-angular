const username: string | number = 'ernestozann';
const sum = (a: number, b:number) => {
  return a + b;
}
sum(2,5);

class Person {
  constructor(private age: number,public lastName: string) {}
}

const eru = new Person(22,"Martinez");
// eru.age;
/*error intencional para mostrar la definicion de private */
