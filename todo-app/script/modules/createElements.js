import { appContainer } from "./render.js";

const createTitleH3 = () => {
  const titleH3 = document.createElement('h3');
  titleH3.textContent = 'ToDo or not ToDo?';
  return titleH3;
};

const createInput = () => {
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'ввести задачу';

  input.classList.add('form-control');

  return input;
};

const createLabel = () => {
  const label = document.createElement('label');
  label.classList.add('form-group', 'me-3', 'mb-0');
  label.append(createInput());

  return label;
};

const createBtnSave = () => {
  const btnSave = document.createElement('button');
  btnSave.type = 'submit';
  btnSave.classList.add('btn', 'btn-primary', 'me-3');
  btnSave.textContent = 'Сохранить';

  return btnSave;
};

const createBtnClear = () => {
  const btnClear = document.createElement('button');
  btnClear.type = 'reset';
  btnClear.classList.add('btn', 'btn-warning');
  btnClear.textContent = 'Очистить';

  return btnClear;
};

const createForm = () => {
  const form = document.createElement('form');

  form.classList.add('d-flex', 'align-items-center', 'mb-3');
  form.append(createLabel());
  form.append(createBtnSave());
  form.append(createBtnClear());

  return form;
};

const createRow = () => {
  const row = document.createElement('tr');
  row.insertAdjacentHTML('afterbegin',
      `<td>1</td>
        <td class="task">Купить слона</td>
        <td>В процессе</td><td>
        <button class="btn btn-danger">
          Удалить
        </button>
        <button class="btn btn-success">
          Завершить
        </button>
      </td>`);

  return row;
};

const createTableBody = () => {
  const tableBody = document.createElement('tbody');
  tableBody.append(createRow());

  return tableBody;
};

const createTable = () => {
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');

  table.insertAdjacentHTML('afterbegin',
      `<thead>
        <tr>
          <th>№</th>
          <th>Задача</th>
          <th>Статус</th>
          <th>Действия</th>
        </tr>
      </thead>`);

  const tableBody = createTableBody();
  table.append(tableBody);

  return table;
};

const createTableWrapper = () => {
  const wrapperTable = document.createElement('div');
  wrapperTable.classList.add('table-wrapper');
  wrapperTable.append(createTable());

  return wrapperTable;
};

export { createTitleH3, createForm, createTableWrapper, createRow };