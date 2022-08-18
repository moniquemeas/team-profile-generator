//display manager data
const managerCard = function (manager) {
  return `
  <div class="card shadow teamMember">
          <header class="bg-primary text-white p-3">
              <h5>Name: ${manager.name}</h5>
              <h5>Manager</h5>
              <i class="material-icons">
                  supervisor_account
              </i>
          </header>
          <div class="employeeContainer">
          <div class="employeeInfo shadow">
          <div class="detail shadow-sm p-3">ID: ${manager.id}</div>
          <div class="detail shadow-sm p-3">Email: <a href = 'mailto:${manager.email}'>${manager.email}</a></div>
          <div class="detail shadow-sm p-3">Office Number: ${manager.officeNumber}</div>
          </div>
          </div>
      </div>
`
};
//display engineer data
const engineerCard = function(engineer) {
  return `
  <div class="card shadow teamMember">
          <header class="bg-primary text-white p-3">
              <h5>Name: ${engineer.name}</h5>
              <h5>Engineer</h5>
              <i class="material-icons">
              engineering
              </i>
          </header>
          <div class="employeeContainer">
          <div class="employeeInfo shadow">
          <div class="detail shadow-sm p-3">ID: ${engineer.id}</div>
          <div class="detail shadow-sm p-3">Email: <a href = 'mailto:${engineer.email}'>${engineer.email}</a></div>
          <div class="detail shadow-sm p-3">GitHub username: <a href = 'https://github.com/${engineer.github}' target ='_blank'>${engineer.github}</a></div>
          </div>
          </div>
      </div>
  `
};

//display intern data
const internData = function (intern) {
  return `
  <div class="card shadow teamMember">
          <header class="bg-primary text-white p-3">
              <h5>Name: ${intern.name}</h5>
              <h5>Intern</h5>
              <i class="material-icons">
              co_present
              </i>
          </header>
          <div class="employeeContainer">
          <div class="employeeInfo shadow">
          <div class="detail shadow-sm p-3">ID: ${intern.id}</div>
          <div class="detail shadow-sm p-3">Email: <a href = 'mailto:${intern.email}'>${intern.email}</a></div>
          <div class="detail shadow-sm p-3">School: ${intern.school}</div>
          </div>
          </div>
      </div>
  `
};

const generatePage = (data) => {
  pageArr = [];

  for (let i=0; i<data.length; i++){
    const employee = data[i];
    const role = employee.getRole();

    //call manage function
    if (role === 'Manager') {
      const managerInfo = managerCard(employee);
      pageArr.push(managerInfo);
    }

    //call engineer function
    if(role === 'Engineer') {
      const engineerInfo = engineerCard(employee);
      pageArr.push(engineerInfo);
    }

    //call intern function
    if(role === 'Intern') {
      const internInfo = internData(employee);
      pageArr.push(internInfo);
    }
  }

  const employeeCard = pageArr.join('')

  //return to page
  const generateTeam = pageTemplate(employeeCard) 
  return generateTeam;
}

const pageTemplate = (employeeCard) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<title>Team Profile</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">
<link rel="stylesheet" href="style.css">

<body>
<main class="container">
  <div class="teamHeader">
  <h1>My Team</h1>
  </div>
  <div class="d-flex cardContainer">
      ${employeeCard}
  </div>

</main>

</body>
</html>
  `;
}
module.exports = generatePage;