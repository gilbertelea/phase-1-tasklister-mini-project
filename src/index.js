document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    Handletask(e.target.new_task_description.value);
    HandleFirst(e.target.fname.value);
    // HandleSecond(e.target.lname.value);
    form.reset()
  })

});

function Handletask(task){
  let  p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', HandleDelete);
  p.textContent = `${task } `;
  btn.textContent = 'x'
  p.appendChild(btn);
  const Task = document.querySelector('#tasks');
  Task.appendChild(p);
  
}

function HandleFirst(fn){
  let  p = document.createElement('p');
  p.textContent = `${fn } `;
  const prenom = document.querySelector('#prenom');
  prenom.appendChild(p)
  
}

// function HandleSecond(ln){
//   let  p = document.createElement('p');
//   p.textContent = `${ln } `;
//   const nom = document.querySelector('#nom');
//   nom.appendChild(p)
// }



function HandleDelete(e){
  e.target.parentNode.remove()
}

