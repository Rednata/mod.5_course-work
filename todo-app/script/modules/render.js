import {
  createTitle,
  form,
  login,
  createTableWrapper,
  createRow,
  createModal,
} from './createElements.js';

const appContainer = document.querySelector('.app-container');

appContainer.classList.add('app-container', 'vh-100', 'w-100', 'd-flex',
    'align-items-center', 'justify-content-center', 'flex-column', 'd-none');

appContainer.before(createModal());

const renderApp = () => {
  const title = createTitle();
  const tableWrapper = createTableWrapper();

  appContainer.append(login, title, form, tableWrapper);
};

const renderTask = (task) => {
  createRow(task);
};

export { renderApp, renderTask };
