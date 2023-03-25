/*
    -> Function Borrowing:
    
    With the 'bind()' method, an object can borrow a method from another object.

   In example below, The member object borrows the 'calculate Net Salary' method from the person object:
*/

const salaryEmployee = {
    calculate: function () {
        return this.salary - (this.salary * 0.15);
    }
}

const member = {
    fullName: 'Carlos Souza',
    salary: 12000,
}

let infosEmployee = salaryEmployee.calculate.bind(member);
