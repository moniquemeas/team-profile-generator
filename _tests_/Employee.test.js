const Employee = require('../lib/Employee');

//create employee object
test('creates employee object', () => {
    const employee = new Employee('Dave', 14, 'dave123@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});
// test getName()
test('get employee name', () => {
    const employee = new Employee('Dave', 14, 'dave123@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});
//test getId()
test('get employee id', () => {
    const employee = new Employee('Dave', 14, 'dave123@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});
//test getEmail()
test('get employee email', () => {
    const employee = new Employee('Dave', 14, 'dave123@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});
