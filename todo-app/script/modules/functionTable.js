import { tableBody } from './createElements.js';
import { getStorageTask, setStorageTask } from './storage.js';

const currentRow = (target) => {
  const row = target.closest('tr');
  return row;
};

const getCurrentRowID = (row) => +(row.querySelector('.d-none').textContent);

const getNewStorageTask = (currentRowID, storageTask) =>
  storageTask.filter(({ id }) => id !== currentRowID);

const getNewStorageIndexed = (newStorageTask) => {
  newStorageTask.map((elem, index) => elem.count = index + 1);
};

const changeTaskIndex = () => {
  const allRowIndex = tableBody.querySelectorAll('tr');
  allRowIndex.forEach((elem, ind) => {
    elem.firstElementChild.textContent = ind + 1;
  });
};

const deleteTask = (userName) => {
  tableBody.addEventListener('click', ({ target }) => {
    if (target.classList.contains('btn-danger')) {
      const row = currentRow(target);
      row.remove();
      const currentRowID = getCurrentRowID(row);
      const storageTask = getStorageTask(userName);
      const newStorageTask = getNewStorageTask(currentRowID, storageTask);

      getNewStorageIndexed(newStorageTask);
      setStorageTask(userName, newStorageTask);
      changeTaskIndex();
    }
  });
};

const changeTaskStatus = (cellTask, cellStatus) => {
  cellTask.classList.toggle('text-decoration-line-through');

  if (cellTask.closest('.text-decoration-line-through')) {
    cellStatus.textContent = 'Выполнено';
  } else {
    cellStatus.textContent = 'В процессе';
  }
}

const completeTask = () => {
  tableBody.addEventListener('click', ({ target }) => {
    if (target.classList.contains('btn-success')) {
      const row = currentRow(target);
      const cellTask = row.querySelector('.task');
      const cellStatus = row.querySelector('.status');

      changeTaskStatus(cellTask, cellStatus);
    }
  });
};

export { deleteTask, completeTask };

