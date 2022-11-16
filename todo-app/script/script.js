import { renderApp } from './modules/render.js';
import { author } from './modules/functionModal.js';
import { 
  completeTask,
  editTask
} from './modules/functionTable.js';

const init = () => {
  author();
  renderApp();
  completeTask();
  editTask();
};

init();
