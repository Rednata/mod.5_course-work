import { createRow, createTableBody, createTableWrapper } from './createElements.js';
import { renderTask } from './render.js';
import { getStorageTask, setStorageTask } from './storage.js';



const getTaskID = () => Math.trunc(Math.random() * 10000);

const submitForm = (form, userName, storageLength) => {
  form.addEventListener('submit', e => {
    e.preventDefault();


    const target = e.target;
    let storageLength = getStorageTask(userName).length;
    console.log(storageLength);
    

    const task = {
      id: getTaskID(),
      count: ++storageLength,
      task: target.task.value,
      status: 'В процессе',
    };

      
    const row = renderTask(task);


    const ttt = getStorageTask(userName);

    ttt.push(task);

    setStorageTask(userName, ttt);


    form.reset(); 
    // form.querySelector('.btn-primary').disabled = true;
  });
};

const clear = () => {
  document.querySelector('.btn-warning').addEventListener('click', () => {
    localStorage.clear();
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
  });

}


 
export { submitForm, clear };