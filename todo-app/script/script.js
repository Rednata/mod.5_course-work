import { renderApp } from './modules/render.js';
import { 
  author,
  getStorageTask,
  renderStorageTask } from './modules/storage.js';
import { onSaveBtnClick } from './modules/functionForm.js';
import { 
  deleteTask,
  completeTask,
} from './modules/functionTable.js';


const init = () => {
  const userName = author();
  renderApp();
  const storageTask = getStorageTask(userName);
  renderStorageTask(storageTask);
  onSaveBtnClick(userName);
  deleteTask(userName);
  completeTask();
};

init();
