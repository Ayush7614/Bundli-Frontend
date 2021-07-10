//Variables
const courses= document.querySelector('#courses-list'),
        shoppingCartContent= document.querySelector('#cart-content tbody'),
        clearCartBtn=document.querySelector('#clear-cart');





//Listeners
loadEventListeners();


function loadEventListeners(){


    courses.addEventListener('click', buycourse);

    shoppingCartContent.addEventListener('click', removeCourse);

    clearCartBtn.addEventListener('click', clearCart);

    document.addEventListener('DOMContentLoaded', getFromLocalStorage);

}





//Functions

function buycourse(e){

    if(e.target.classList.contains('add-to-cart')){
        

    const course= e.target.parentElement.parentElement;

    getCourseInfo(course);

    }
}

function getCourseInfo(course){

    const courseInfo={

        image: course.querySelector('img').src,
        title:course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')

    }
    addIntoCart(courseInfo);
}

function addIntoCart(course){
    const row= document.createElement('tr');
    row.innerHTML= ` 
    <tr>
    <td>
    <img src="${course.image}" width=100>
    </td>
    <td> ${course.title} </td>
    <td> ${course.price} </td>
    <td> <a href ="#" class="remove" data-id="${course.id}">X</a> </td>


    </tr>

    `;
    shoppingCartContent.appendChild(row);

    saveIntoStorage(course);
}

function removeCourse(e){

    if(e.target.classList.contains('remove')){
        

        e.target.parentElement.parentElement.remove();
    
       
    
        }
}

function clearCart(e){
    shoppingCartContent.innerHTML='';
    
}

function saveIntoStorage(course){

let courses= getCoursesFromStorage();

courses.push(course);

localStorage.setItem('courses', JSON.stringify(courses));
}

function getCoursesFromStorage(){
    let courses; 

    if(localStorage.getItem('courses')===null){
        courses=[];
    } else{
        course= JSON.parse(localStorage.getItem('courses'));
    
    }
    return courses;
}

function getFromLocalStorage(){
    let coursesLS= getCoursesFromStorage(); 


     coursesLS.forEach(function(course) {


        const row= document.createElement('tr');
        row.innerHTML= ` 
    <tr>
    <td>
    <img src="${course.image}" width=100>
    </td>
    <td> ${course.title} </td>
    <td> ${course.price} </td>
    <td> <a href ="#" class="remove" data-id="${course.id}">X</a> </td>


    </tr>

    `;
        shoppingCartContent.appendChild(row);
     }); 

}
