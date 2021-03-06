const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector('#toggle-icon');
const nav = document.getElementById('nav');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const themeModeSwitcher = (mode) => {
  nav.style.backgroundColor =
    mode === 'dark' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor =
    mode === 'dark' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';

  toggleIcon.querySelector('span').textContent = `${mode} mode`;

  mode === 'dark'
    ? toggleIcon.querySelector('i').classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.querySelector('i').classList.replace('fa-moon', 'fa-sun');
  image1.src = `img/undraw_proud_coder_${mode}.svg`;
  image2.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
};

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeModeSwitcher('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeModeSwitcher('light');
  }
};

toggleSwitch.addEventListener('change', switchTheme);

// check for values in localStorage;
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    themeModeSwitcher('dark');
  }
}
