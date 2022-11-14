import { tableBody, form, btnClear } from './createElements.js';
import { renderTask } from './render.js';
import { getStorageTask, setStorageTask } from './storage.js';

const getTaskID = () => Math.trunc(Math.random() * 10000);

const getTask = (target, storageLength) => {
  const task = {
    count: ++storageLength,
    id: getTaskID(),
    task: target.task.value,
    status: 'В процессе',
  };
  return task;
};

const addTaskStorage = (userName, task) => {
  const storageTask = getStorageTask(userName);
  storageTask.push(task);
  setStorageTask(userName, storageTask);
};

const clearStorage = () => {
  localStorage.clear();
  tableBody.innerHTML = '';
};

const onClearBtnClick = () => {
  btnClear.addEventListener('click', () => {
    clearStorage();
  });
};

const onSaveBtnClick = (userName) => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const target = e.target;
    const storageLength = getStorageTask(userName).length;
    const task = getTask(target, storageLength);

    renderTask(task);
    addTaskStorage(userName, task);
    form.reset();
    onClearBtnClick();
  });
};

export { onSaveBtnClick };
