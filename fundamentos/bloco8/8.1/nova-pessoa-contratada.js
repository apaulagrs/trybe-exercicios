const newEmployees = (myFunction) => {
    const employees = {
      id1: myFunction('Pedro Guerra'), 
      id2: myFunction('Luiza Drumond'), 
      id3: myFunction('Carla Paiva'), 
    }
    return employees;
  };

 //modelo de email: nome_da_pessoa@trybe.com

const myFunction = (fullName) => {
  const email = `${fullName.replace(' ', '_').toLowerCase()}@trybe.com`;
  return { fullName, email: email };
}

console.log(newEmployees(myFunction));



