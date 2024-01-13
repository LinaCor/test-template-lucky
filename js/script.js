const INVALID_SYMBOLS = /[!@#$%^&*()]/i;
let navList = document.querySelector('.header__nav-list');
let descriotionPage = document.querySelector('.legend__descr p');
let formSearch = document.querySelector('.legend__descr-search');
let inputSearch = formSearch.querySelector('.legend__descr-search input');
let errorMsgInput = formSearch.querySelector('.legend__descr-search p');
let btnToSearch = formSearch.querySelector('.legend__descr-search button');

const validateInput = (valueInput) => {
  if (valueInput.length < 4 || !valueInput.length) {
    return 'at least four characters';
  }

  if (INVALID_SYMBOLS.test(valueInput)) {
    return 'invalid characters';
  }
};

window.onload = async function () {
  let response = await fetch('88888')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      descriotionPage.textContent = 'We Make international calling simple, relible, and cheap basedon your unique calling behavior.';
    })
    .catch((error) => console.log(error));

  let maxLength = response.length;
  const randomHeading = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  descriotionPage.textContent = response[randomHeading(0, maxLength)];
}


navList.addEventListener('click', function (evt) {
  let navListItems = document.querySelectorAll('.header__nav-item a');
  for (let elem of navListItems) {
    elem.classList.remove('active');
  }
  evt.target.classList.add('active');
});

inputSearch.addEventListener('input', function () {
  const valueInput = inputSearch.value.toLowerCase();
  const errorMessage = validateInput(valueInput);
  if (errorMessage) {
    errorMsgInput.innerHTML = errorMessage;
    errorMsgInput.style.display = 'block';
    btnToSearch.disabled = true;
  }

  if ((valueInput.length > 4 && !errorMessage) || !valueInput.length) {
    errorMsgInput.innerHTML = '';
    errorMsgInput.style.display = 'none';
    btnToSearch.disabled = false;
  }
});

formSearch.addEventListener('submit', (evt) => {
  evt.preventDefault();
  inputSearch.value = '';
})





