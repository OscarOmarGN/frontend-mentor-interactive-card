//Nombre
const $cardName = document.querySelector('.card-name'),
      $inputName = document.querySelector('.input-name'),
      $errorName = document.querySelector('form-input-name-error');
//Numero de tarjeta
const $cardNumber = document.querySelector('.card-number'),
      $inputNumber = document.querySelector('.input-number'),
      $errorNumber = document.querySelector('.form-input-cardNumber-error');
//Fecha de expiracion
const $cardMonth = document.querySelector('.card-date-month'),
      $inputMonth = document.querySelector('.inputMonth'),
      $errorMonth = document.querySelector('.form-input-cardMonth-error');
const $cardYear = document.querySelector('.card-date-year'),
      $inputYear = document.querySelector('.inputYear'),
      $errorYear = document.querySelector('.form-input-cardYear-error');
//cvc
const $cardCvc = document.querySelector('.card-cvc'),
      $inputCvc = document.querySelector('.input-cvc'),
      $errorCvc = document.querySelector('.form-input-cardCvc-error');
//boton
const $button = document.querySelector('.thanks-button');


//mostrar el error
const showError = (divInput, divError, msgError) => {
  divError.innerText = msgError;
  divInput.style.borderColor = '#ff0000';
}

//ocultar el error
const hiddeError = (divInput, divError) => {
  divError.innerText = '';
  divInput.style.borderColor = 'hsl(270, 3%, 87%)';
}

//Ingreso dinamico del nombre
$inputName.addEventListener("input", (e) => {
  e.target.value == '' ?  $cardName.innerText = 'Jane Appleseed' : $cardName.innerText = e.target.value;
})
//Ingreso dinamico del numero de tarjeta
$inputNumber.addEventListener('input', (e) => {
  let regExp = /[A-z]/g;
  if(regExp.test($inputNumber.value)){
    showError($inputNumber, $errorNumber, 'Error: without letters');
  } else if($inputNumber.value == ''){
    $cardNumber.innerText = '0000 0000 0000 0000';
  } else {
    $errorNumber.innerText = '';
    hiddeError($inputNumber, $errorNumber);
    e.target.value = e.target.value.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
    $cardNumber.innerText = e.target.value;
  }
})

//Ingreso dinamico del mes

$inputMonth.addEventListener('input', (e) => {


  if(e.target.value > 12 || e.target.value <= 0 && e.target.value != ''){
    showError($inputMonth, $errorMonth, 'Month invalid');
  } else if(isNaN(e.target.value)){
    showError($inputMonth, $errorMonth, 'No letters');
  } else if(e.target.value.length == 1){
    $cardMonth.innerText = `0${e.target.value}`
    hiddeError($inputMonth, $errorMonth);
  } else if(e.target.value == ''){
    hiddeError($inputMonth, $errorMonth);
    $cardMonth.innerText = '00';
  } else {
    $cardMonth.innerText = e.target.value;
  }

})

//Ingreso dinamico del año

$inputYear.addEventListener('input', (e) => {
  const anio = new Date().getFullYear().toString();
  const anioFormato = parseInt(anio.substring(anio.length - 2));
  const maxAnio = anioFormato + 5;
  console.log(typeof(maxAnio))
  if(e.target.value != "" && e.target.value < anioFormato){
    showError($inputYear, $errorYear, 'Year invalid');
  } else if(e.target.value > maxAnio){
    showError($inputYear, $errorYear, 'Year invalid');
  } else if(isNaN(e.target.value)){
    showError($inputYear, $errorYear, 'No letters');
  } else if(e.target.value == ''){
    $cardYear.innerText = '00';
    hiddeError($inputYear, $errorYear);
  } else {
    hiddeError($inputYear, $errorYear);
    $cardYear.innerText = '00';
    $cardYear.innerText = e.target.value;
  }
  // e.target.value == '' ? $cardYear.innerText = '00' : $cardYear.innerText = e.target.value;
})

//Ingreso dinamico del cvc

$inputCvc.addEventListener('input', (e) => {

  if(isNaN(e.target.value)){
    showError($inputCvc, $errorCvc, 'Error, without letters');
  } else {
    hiddeError($inputCvc, $errorCvc);
    e.target.value == '' ? $cardCvc.innerText = '000' : $cardCvc.innerText = e.target.value;
  }

})

$button.addEventListener('click', () => {
  preventDefault();
  console.log(parseInt($inputName.value))
})


