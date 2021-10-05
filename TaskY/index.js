const taskContainer = document.querySelector(".task_container");

let globalStore = [];

const generateNewCard = (taskData) => `
<div class="col-md-6 col-lg-4" >
<div class="card m-3">
    <div class="card-header d-flex justify-content-end gap-2">
      <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
      <button type="button" class="btn btn-outline-danger" id=${taskData.id} onclick="deleteCard.apply(this,arguments)"><i class="fas fa-trash-alt" id=${taskData.id} onclick="deleteCard.apply(this,arguments)"></i></button>
    </div>
    <img src= ${taskData.imageUrl} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${taskData.taskTitle}</h5>
      <p class="card-text">${taskData.taskDescription}</p>
      <a href="#" class="btn btn-primary">${taskData.taskType}</a>
    </div>
    <div class="card-footer text-muted">
      <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
    </div>
  </div>
</div>
`;

const loadIntialCardData = () =>{
  //Locasl storage to get tasky card taskData
  const getCardData = localStorage.getItem("tasky");
  //convert from string to normal object
  const {cards} = JSON.parse(getCardData); 
  //loop over thode array
  cards.map((cardObject)=> {
    
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));
    //update 
    globalStore.push(cardObject);
  })

};

const saveChanges = () =>{
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskdescription: document.getElementById("taskdescription").value,
    };

    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));

    globalStore.push(taskData);

    localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));
};

const deleteCard = (event) => {
  event = window.event;
  //id
  const targetId = event.target.id;

  const tagname =event.target.tagName;
  //match the id fof element with the id inside the globalStore

  //if match found remove
  globalStore =  globalStore.filter((cardObject) => cardObject.id !== targetId);
  localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));
  //contactParent

  if(tagname == "BUTTON"){
    return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode);
  }else{
    return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
  }

}


