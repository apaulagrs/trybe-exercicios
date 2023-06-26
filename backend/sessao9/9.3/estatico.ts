class Employee {
  private static employeeCount = 0;
  private employeeName:string;

  constructor(name:string) {
    Employee.addEmployee();
    this.employeeName = name;
  }

  private static addEmployee() {
    Employee.employeeCount +=1;
    console.log(`Total de pessoas funcionárias: ${Employee.employeeCount}`)
  }

  public getName():string { return this.employeeName; }
}

const employee1 = new Employee('Ana Paula');
const employee2 = new Employee('Felipe');
const employee3 = new Employee('Adriana');
