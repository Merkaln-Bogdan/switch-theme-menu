import _ from 'lodash';
import '../src/style.css';
import dishes from '../src/menu.json';
import templateDishPost from './template.hbs';
import './theme';
const refs = { blockWithDish: document.querySelector('.js-menu') };

buildMenuList(dishes);

function buildMenuList(dishes) {
  const markup = dishes.map(dish => templateDishPost(dish)).join('');
  refs.blockWithDish.insertAdjacentHTML('beforeend', markup);
}
