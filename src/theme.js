const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

console.log(localStorage);
const inputTheme = {
  button: document.querySelector('.js-switch-input'),
};
const setTheme = localStorage.getItem('Themedark');
const parsedTheme = JSON.parse(setTheme);
console.log(parsedTheme === Theme.DARK);
if (parsedTheme) {
  if (parsedTheme === Theme.DARK) {
    inputTheme.button.checked = true;
  } else {
    inputTheme.button.checked = false;
  }
  document.body.classList.add(parsedTheme);
}
inputTheme.button.addEventListener('click', switchTheme);

function switchTheme(e) {
  localStorage.clear();
  if (e.currentTarget.checked === true) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('Themedark', JSON.stringify(Theme.DARK));
  } else {
    localStorage.clear();
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('Themelight', JSON.stringify(Theme.LIGHT));
  }
}
