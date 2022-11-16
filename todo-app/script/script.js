import { renderApp } from './modules/render.js';
import { author } from './modules/functionModal.js';
import { onClearBtnClick } from './modules/functionForm.js';
import { 
  completeTask,
} from './modules/functionTable.js';

const init = () => {
  author();
  renderApp();
  onClearBtnClick();
  // completeTask();
};

init();
