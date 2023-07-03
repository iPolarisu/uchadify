// add hourse input
var hoursInput = document.createElement('input');
hoursInput.setAttribute('type', 'text');
hoursInput.setAttribute('class', 'number short');
hoursInput.setAttribute('placeholder', 'Horas');
hoursInput.addEventListener('input', updateMinutes);

var formulario = document.querySelector('form[name="formulario"]');
if (formulario) {
  formulario.appendChild(hoursInput);
}

// Función para calcular y actualizar el cuadro de texto de minutos
function updateMinutes() {
  var hours = parseInt(hoursInput.value);
  var minutes = isNaN(hours) ? '' : hours * 60;
  var minutesInput = document.querySelector('input[name="tiempo"]');
  if (minutesInput) {
    minutesInput.value = minutes;
  }
}