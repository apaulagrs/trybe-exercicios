// const submitButton = document.querySelector('#enviar');
// submitButton.addEventListener('click', function(enviar) {
//     enviar.preventDefault();
// })

function textInputValidation() {
    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;
    
    const name = document.querySelector('#nome').value.length;
    const invalidName = name < 10 || name > 40;

    const reason = document.querySelector('#motivo').value.length;
    const invalidReason = reason > 500;

    if (invalidEmail || invalidName || invalidReason) {
        return false;
    } else {
        return true;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  }