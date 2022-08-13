const Manager = require('../lib/Manager');

//create manager object
test('creates manager object', () => {
    const manager = new Manager('Dave', 14, 'dave123@gmail.com', 9);

   expect(manager.officeNumber).toEqual(expect.any(Number));

});
// test getOfficeNumber()
test('get manager office number', () => {
    const manager = new Manager('Dave', 14, 'dave123@gmail.com', 9);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});
//test getRole
test('get manager role', () =>{
    const manager = new Manager ('Dave', 14, 'dave123@gmail.com', 9);
    expect(manager.getRole()).toEqual('Manager');
})
