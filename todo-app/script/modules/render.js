import { 
  createForm,
  createTitleH3,
  createTableWrapper,
  createRow,
} from './createElements.js';

console.log(createRow);

const appContainer = document.querySelector('.app-container');

appContainer.classList.add('app-container', 'vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');

const render = () => {
  const titleH3 = createTitleH3();

  const form = createForm();
  const tableWrapper = createTableWrapper();

  appContainer.append(titleH3, form, tableWrapper);
};


export {
  appContainer,
  render};
