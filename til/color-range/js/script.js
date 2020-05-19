window.addEventListener('load', start);


function start() {
  //pegando os inputs
  let inputRed = document.getElementById('red');
  let inputGreen = document.getElementById('green');
  let inputBlue = document.getElementById('blue');

  let body = document.querySelector('body');
  body.style.backgroundColor = `rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`;

  function insertColor() {
    body.style.backgroundColor = `rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`;
    function insertValues() {
      document.getElementById('numberRed').value = inputRed.value;
      document.getElementById('numberGreen').value = inputGreen.value;
      document.getElementById('numberBlue').value = inputBlue.value;
    }
    insertValues();
  }

  inputRed.addEventListener('input', () => {
    insertColor();
  });
  inputGreen.addEventListener('input', () => {
    insertColor();
  });
  inputBlue.addEventListener('input', () => {
    insertColor();

  });
}
