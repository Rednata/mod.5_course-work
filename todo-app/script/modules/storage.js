import { renderTask } from './render.js';

const author = () => {
  const userName = prompt('Введите Ваше имя:');

  return userName;
};

const getStorageTask = (userName) => {
  const storageTask = JSON.parse(localStorage.getItem(userName)) || [];
  return storageTask;
};

const setStorageTask = (userName, task) => {
  localStorage.setItem(userName, JSON.stringify(task));
};

const renderStorageTask = storageTask => storageTask.forEach(renderTask);

export { author, getStorageTask, setStorageTask, renderStorageTask };
