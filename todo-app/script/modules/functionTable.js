import { renderTask } from './render.js';
import { getStorageTask, setStorageTask } from './storage.js';

const printStorageTask = (storageTask) => {
  storageTask.forEach(task => renderTask(task));
  return (storageTask.length + 1);
};

const deleteTask = (userName) => {
  const tableBody = document.querySelector('tbody');
  tableBody.addEventListener('click', ({target}) => {
    const del = target.classList.contains('btn-danger');
    if (del) {
      
      const removeID = Number(target.closest('tr').querySelector('.d-none').textContent);
      
      const storageTask = getStorageTask(userName);
      

      const news = storageTask.filter(elem => {

        return elem.id !== removeID;
      });

      news.map((elem, index) => {
        
        elem.count = index + 1;

      });

      setStorageTask(userName, news);

      target.closest('tr').remove();
      const arrAllTaskIndex = tableBody.querySelectorAll('tr');

      arrAllTaskIndex.forEach((elem, ind) => { 

        elem.firstElementChild.textContent = ind + 1;
      });

    
    }
    
  });
};

const endTask = () => {
  const tableBody = document.querySelector('tbody');
  tableBody.addEventListener('click', ({ target }) => {
    if (target.classList.contains('btn-success')) {
      const endTaskTableTask = target.closest('tr').querySelector('.task');
      endTaskTableTask.classList.remove('task');
      endTaskTableTask.classList.add('text-decoration-line-through');

      const endTaskTableStatus = target.closest('tr').querySelector('.status');
      endTaskTableStatus.textContent = 'Выполнено';



    }
  })
}

export { printStorageTask, deleteTask, endTask };

