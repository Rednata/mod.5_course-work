import { 
  createForm,
  createTitle,
  createTableWrapper,
  createRow,
  createTableBody,
} from './createElements.js';


const appContainer = document.querySelector('.app-container');

appContainer.classList.add('app-container', 'vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');

const renderApp = () => {
  const title = createTitle();
  const form = createForm();
  const tableWrapper = createTableWrapper();

  appContainer.append(titleH3, form, tableWrapper);

  return form;
};

const renderTask = (task) => {
  createRow(task);
};


export { renderApp, renderTask };
