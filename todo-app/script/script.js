import { renderApp } from './modules/render.js';
import { submitForm, clear } from './modules/functionForm.js';
import { author, getStorageTask } from './modules/storage.js';
import { printStorageTask, deleteTask, endTask } from './modules/functionTable.js';


const init = () => {
  const userName = author();
  const form = renderApp();
  const storageTask = getStorageTask(userName);
  const storageLength = printStorageTask(storageTask);

  submitForm(form, userName, storageLength);
  deleteTask(userName);
  endTask();
  clear();

};

init();
