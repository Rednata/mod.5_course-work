const createTitle = () => {
  const title = document.createElement('h3');
  title.textContent = 'ToDo or not ToDo?';

  return title;
};

const createInput = () => {
  const input = document.createElement('input');

  input.type = 'text';
  input.name = 'task';
  input.required = true;
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

const createTableBody = () => {
  const tableBody = document.createElement('tbody');

  return tableBody;
};

const createRow = (obj) => {
  const { id, count, task, status } = obj;
  const row = document.createElement('tr');
  row.insertAdjacentHTML('afterbegin',
      `<td>${count}</td>
      <td class="d-none">${id}</td>              
        <td class="task">${task}</td>
        <td class="status">${status}</td>
        <td>
          <button class="btn btn-danger">
            Удалить
        </button>
        <button class="btn btn-success">
          Завершить
        </button>
        <button class="btn btn-info">
          Редактировать
        </button>
      </td>`);

  //  Не смогла сюда передать tableBody, в итоге сделала через querySelector. Как было правильно?  
  document.querySelector('tbody').append(row);
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

export { createTitle, createForm, createTableWrapper, createRow, createTableBody };
