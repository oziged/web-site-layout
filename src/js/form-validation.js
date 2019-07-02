
let form = document.querySelector('form[name="contact_us"');
let button = form.querySelector('button');

let inputs = [];
[...form.elements].forEach(elem => {
  if (elem.tagName == 'BUTTON') return false;
  else inputs.push(elem);
})

button.onclick = () => false;

button.addEventListener('click', validateForm);
inputs.forEach(elem => {
  elem.addEventListener('input', validateForm);
})

function validateForm() {
  inputs.forEach(elem => {
    if (!elem.value) {
      addError(elem, 'Заполните поле');
      return;
    }

    if (elem.id == 'email') {
      if (!checkMail(elem.value)) {
        addError(elem, 'Укажите корректную почту');
        return;
      }
    }

    if (elem.id == 'phone') {
      if (elem.value.length < 10 || elem.value.length > 15) {
        addError(elem, 'Введите корректный номер');
        return;
      }
    }

    clearError(elem);
  })
}

function addError(elem, message) {
  let errorElem = elem.nextElementSibling;
  if (errorElem) {
    if (message == errorElem.textContent) return;
    else {
      errorElem.textContent = message;
    }
  } else {
    let errorElem = document.createElement('div');
    errorElem.classList.add('error_text');
    errorElem.textContent = message;
    elem.parentNode.append(errorElem);
  }
  
}

function clearError(elem) {
  if (elem.nextElementSibling) elem.nextElementSibling.remove();
}

function checkMail(str) {
  if (!str.includes('@')) return false;
  let strArr = str.split('@');
  if ((strArr[0] && strArr[1]) && strArr[1].includes('.')) return true;
  return false;
}


