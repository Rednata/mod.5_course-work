import { getStorageTask, renderStorageTask } from './storage.js';
import { onSaveBtnClick } from './functionForm.js';
import { completeTask, deleteTask, editTask } from './functionTable.js';
import { login } from './createElements.js';

const formModal = document.querySelector('.formModal');
const input = formModal.querySelector('.inputModal');
const appContainer = document.querySelector('.app-container');
const closeBtn = document.querySelector('.btn-close');

const closeModal = () => {
  formModal.classList.add('d-none');
};

const showApp = (userName) => {
  appContainer.classList.remove('d-none');
  login.textContent = `Вы вошли под именем: ${userName}`;
};

const author = () => {
  formModal.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = input.value;

    closeModal();
    showApp(userName);

    const storageTask = getStorageTask(userName);

    renderStorageTask(storageTask);
    onSaveBtnClick(userName);
    deleteTask(userName);
    editTask(userName);
    completeTask(userName);
    formModal.reset();
  });

  closeBtn.addEventListener('click', () => {
    closeModal();
  });
};

export {author};
