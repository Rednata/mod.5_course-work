const createTitle = () => {
  const title = document.createElement('h3');
  title.textContent = 'ToDo or not ToDo?';

  return title;
};

const createInput = () => {
  const input = document.createElement('input');

  input.type = 'text';
  input.name = 'task';
  input.placeholder = 'ввести задачу';
  input.classList.add('form-control');

  return input;
};

const input = createInput();

const createSelect = () => {
  const select = document.createElement('select');
  select.classList.add('me-3');

  select.insertAdjacentHTML('afterbegin',
      `<option value='table-light'>Обычное</option>
      <option value='table-warning'>Важное</option>
      <option value='table-danger'>Срочное</option>`);

  return select;
};

const createLabel = () => {
  const label = document.createElement('label');
  label.classList.add('form-group', 'me-3', 'mb-0');
  label.append(input);

  return label;
};

const createBtnSave = () => {
  const btnSave = document.createElement('button');
  btnSave.type = 'submit';
  btnSave.classList.add('btn', 'btn-primary', 'me-3', 'btn-save');
  btnSave.textContent = 'Сохранить';
  btnSave.disabled = true;

  return btnSave;
};

const createBtnClear = () => {
  const btnClear = document.createElement('button');
  btnClear.type = 'reset';
  btnClear.classList.add('btn', 'btn-warning');
  btnClear.textContent = 'Очистить';

  return btnClear;
};

const btnClear = createBtnClear();

const createForm = () => {
  const form = document.createElement('form');

  form.classList.add('d-flex', 'align-items-center', 'mb-3');
  form.append(createLabel(), createSelect(), createBtnSave(), btnClear);

  return form;
};

const form = createForm();

const createTableBody = () => {
  const tableBody = document.createElement('tbody');

  return tableBody;
};

const tableBody = createTableBody();

const createTHead = () => {
  const thead = document.createElement('thead');
  thead.insertAdjacentHTML('afterbegin',
      `<tr>
        <th>№</th>
        <th>Задача</th>
        <th>Статус</th>
        <th>Действия</th>
      </tr>`);

  return thead;
};

const createRow = (obj) => {  
  const { id, count, task, status } = obj;
  const row = document.createElement('tr');

  if (obj.finished) {
    row.insertAdjacentHTML('afterbegin',
        `<td>${count}</td>
        <td class="d-none">${id}</td>  
        <td class="task text-decoration-line-through">${task}</td>  
        <td class="status">${status}</td>
        <td>
          <button class="btn btn-danger me-1">
            Удалить
        </button>
        <button class="btn btn-success me-1">
          Завершить
        </button>
        <button class="btn btn-info">
          Редактировать
        </button>
        </td>`);
  } else {
    row.insertAdjacentHTML('afterbegin',
        `<td>${count}</td>
        <td class="d-none">${id}</td>              
        <td class="task">${task}</td>
        <td class="status">${status}</td>
        <td>
          <button class="btn btn-danger me-1">
            Удалить
        </button>
        <button class="btn btn-success me-1">
          Завершить
        </button>
        <button class="btn btn-info">
          Редактировать
        </button>
        </td>`);
  }

  
  

  tableBody.append(row);
};

const createTable = () => {
  const table = document.createElement('table');

  table.classList.add('table', 'table-hover', 'table-bordered');
  table.append(createTHead(), tableBody);

  return table;
};

const createLogin = () => {
  const login = document.createElement('p');
  login.classList.add('text-primary', 'fs-5', 'mb-5');
  return login;
};

const login = createLogin();

const createTableWrapper = () => {
  const wrapperTable = document.createElement('div');

  wrapperTable.classList.add('table-wrapper');
  wrapperTable.append(createTable());

  return wrapperTable;
};

// =========== MODAL =================
const createModal = () => {
  const formModal = document.createElement('form');
  formModal.classList.add('formModal', 'w-100', 'text-center', 'pt-5');

  const title = document.createElement('h2');
  title.classList.add('mb-5');
  title.textContent = `You are Wellcome`;

  const label = document.createElement('label');
  const input = document.createElement('input');

  input.classList.add('inputModal', 'form-control');
  input.placeholder = 'Введи имя';
  input.type = 'text';
  input.name = 'userName';
  label.append(input);

  const btnAuthor = document.createElement('button');
  btnAuthor.type = 'submit';
  btnAuthor.classList.add('btn', 'btn-primary', 'ms-4', 'me-3');
  btnAuthor.textContent = 'Author';

  formModal.append(title, label, btnAuthor);
  formModal.insertAdjacentHTML('beforeend',
      `<button type="button" class="btn-close ms-3" aria-label="Close">
      </button>`);

  return formModal;
};

export {
  tableBody, form, btnClear, login,
  createTitle, createForm,
  createTableWrapper, createRow,
  createTable, createModal };
