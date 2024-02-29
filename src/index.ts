export { };

// Accessors are only available when targeting ECMAScript 5 and higher


class Employee {
  private _salary = 0;

  get salary() {
    return this._salary;
  }

  set salary(salary: number) {
    this._salary = salary;
  }
}

const emp1 = new Employee()
console.log(emp1);

emp1.salary = 100;

console.log(emp1.salary)
