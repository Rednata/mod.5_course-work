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

const confirmRemoveTask = () => confirm('Точно хотите удалить задание?');

const deleteTask = (userName) => {
  tableBody.addEventListener('click', ({ target }) => {
    if (target.classList.contains('btn-danger')) {
      if (confirmRemoveTask()) {
        const row = currentRow(target);
        row.remove();
        const currentRowID = getCurrentRowID(row);
        const storageTask = getStorageTask(userName);
        const newStorageTask = getNewStorageTask(currentRowID, storageTask);

        getNewStorageIndexed(newStorageTask);
        setStorageTask(userName, newStorageTask);
        changeTaskIndex();
      }
    }
  });
};

const changeTaskComplete = (cellTask, cellStatus) => {
  cellTask.classList.toggle('text-decoration-line-through');

  if (cellTask.closest('.text-decoration-line-through')) {
    cellStatus.textContent = 'Выполнено';
  } else {
    cellStatus.textContent = 'В процессе';
  }
};

const completeTaskFinished = (currentCompleteTask) => {
  currentCompleteTask.finished = true;
  currentCompleteTask.status = 'Выполнено';
};

const completeTaskDo = (currentCompleteTask) => {
  currentCompleteTask.finished = false;
  currentCompleteTask.status = 'В процессе';
};

const changeStorageComplete = (storageTask, currentRowID, cellTask, userName) => {
  const currentCompleteTask = storageTask.find(elem =>
    elem.id === currentRowID);
  if (cellTask.closest('.text-decoration-line-through')) {
    completeTaskFinished(currentCompleteTask);
  } else {
    completeTaskDo(currentCompleteTask);
  }
  setStorageTask(userName, storageTask);
};

const completeTask = (userName) => {
  tableBody.addEventListener('click', ({ target }) => {
    if (target.classList.contains('btn-success')) {
      const row = currentRow(target);
      const cellTask = row.querySelector('.task');
      const cellStatus = row.querySelector('.status');
      const currentRowID = getCurrentRowID(row);
      const storageTask = getStorageTask(userName);

      changeTaskComplete(cellTask, cellStatus);
      changeStorageComplete(storageTask, currentRowID, cellTask, userName);
    }
  });
};

const makeCellTaskStyle = (cellTask) => {
  cellTask.style.caretColor = 'red';
  cellTask.style.backgroundColor = 'rgba(13, 202, 240, 0.3)';

};

const backCellTaskStyle = (cellTask) => {
  cellTask.addEventListener('blur', () => {
    cellTask.style.backgroundColor = '#ffffff';
    cellTask.setAttribute('contenteditable', false);
  });
};

const editTask = (userName) => {
  tableBody.addEventListener('click', ({ target }) => {
    if (target.classList.contains('btn-info')) {
      const row = currentRow(target);
      const cellTask = row.querySelector('.task');
      cellTask.setAttribute('contenteditable', true);

      makeCellTaskStyle(cellTask);
      backCellTaskStyle(cellTask);
    };
  });
};

export { deleteTask, completeTask, editTask };

