const Intern = require('../lib/Intern');

//create intern object
test('creates intern object', () => {
    const intern = new Intern('Dave', 14, 'dave123@gmail.com', 'Seminole');

   expect(intern.schoolName).toEqual(expect.any(String));

});
// test getSchoolName()
test('get intern school name', () => {
    const intern = new Intern('Dave', 14, 'dave123@gmail.com', 'Seminole');

    expect(intern.getSchoolName()).toEqual(expect.any(String));
});

