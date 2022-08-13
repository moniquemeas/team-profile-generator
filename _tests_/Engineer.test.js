// import Engineer 
const Engineer = require('../lib//Engineer');

//create engineer object
test('create engineer object', () => {
    const engineer = new Engineer ('Dave', 14, 'dave123@gmail.com', 'davepreston');

    expect(engineer.github).toEqual(expect.any(String));
});
//test getGithub()
test('get employee github', () => {
    const engineer = new Engineer ('Dave', 14, 'dave123@gmail.com', 'davepreston');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});
//test getRole
test('get engineer role', () =>{
    const engineer = new Engineer ('Dave', 14, 'dave123@gmail.com', 'davepreston');
    expect(engineer.getRole()).toEqual('Engineer');
})
