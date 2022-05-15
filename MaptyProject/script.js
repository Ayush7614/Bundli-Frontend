'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout{
    date=new Date();
    id=(Date.now()+' ').slice(-10);
    clicks=0;
    constructor(coords,distance,duration)
    {
        this.coords=coords;
        this.distance=distance;
        this.duration=duration;
    }
    _setDescription()
    {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.description=`${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]}${this.date.getDate()}`;

    }
}
class Running extends Workout{
    type='running';
    constructor(coords,distance,duration,cadence)
    {
        super(coords,distance,duration);
        this.cadence=cadence;
        this.calcpace();
        this._setDescription();
    }
    calcpace()
    {
      this.pace=this.duration/this.distance;
      return this.pace;
    }

}
class Cycling extends Workout{
    type='cycling';
    constructor(coords,distance,duration,ElevationGain)
    {
        super(coords,distance,duration);
        this.ElevationGain=ElevationGain;
        this.calcspeed();
        this._setDescription();
    }

    calcspeed()
    {
        this.speed=this.distance/(this.duration/60);
        return this.speed;
    }
}

const running=new Running([39,-12],5.2,24,178);
const cycling=new Cycling([39,12],27,95,523);
console.log(running,cycling);

class App{
    #map;
    #mapzoomlevel=13;
    #mapEvent;
    #workouts=[];
    constructor()
    {
        this._getPosition();

        this._getLocalStorage();
        form.addEventListener('submit',this._newWorkout.bind(this));
        
        inputType.addEventListener('change',this._toggleElevationField);
        containerWorkouts.addEventListener('click',this._movetoPopup.bind(this));

    }
    _getPosition(){
        
if(navigator.geolocation)
{
navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){
    alert("Could not get your position")
});}

    }

    _loadMap(position)
    {

            const {latitude}=position.coords;
            const {longitude}=position.coords;
            const coords=[latitude,longitude]
             this.#map = L.map('map').setView(coords, this.#mapzoomlevel);
        
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        
            this.#map.on('click',this._showform.bind(this));
            //     const{lat,lng}=mapEvent.latlng;
            //     L.marker([lat,lng]).addTo(map)
            // .bindPopup(L.popup({
            //     maxWidth:250,
            //     minWidth:100,
            //     autoClose:false,
            //     closeOnClick:false,
            //     className:'running-popup'
            // })).setPopupContent('Workout')
            // .openPopup();
        

            this.#workouts.forEach(work=>{
                this._renderWorkoutMarker(work);
            })
        }

    _showform(mapE){
            this.#mapEvent=mapE;
            form.classList.remove('hidden');
            inputDistance.focus();
        
        }
        _hideForm()
        {
            inputDistance.value=inputDuration.value=inputElevation.value=inputCadence.value=' ';
            form.style.display='none';
            form.classList.add('hidden');
            setTimeout(function(){
                form.style.display='grid';

            },1000);
        }
    _toggleElevationField(){
inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
inputCadence.closest('.form__row').classList.toggle('form__row--hidden');


    }
    _newWorkout(e)
    {
        const validinputs=(...inputs)=>inputs.every(inp=>Number.isFinite(inp));
            e.preventDefault();

            const allPositive=(...inputs)=>inputs.every(inp=>inp>0);




            const type=inputType.value;
            const distance=+inputDistance.value;
            const duration=+inputDuration.value;
            const{lat,lng}=this.#mapEvent.latlng;
            let workout;


            if(type==='running')
            {
                const cadence=+inputCadence.value;
              if(!validinputs(distance,duration,cadence)||!allPositive(distance,duration,cadence))
                {
                    return alert('INputs have to b e positive number');
                }
                 workout=new Running([lat,lng],distance,duration,cadence);
            }
            if(type==='cycling')
            {
                const elevation=+inputElevation.value;
                if(!validinputs(distance,duration,elevation)||!allPositive(distance,duration))
                {
                    return alert('INputs have to b e positive number');
                }
                workout=new Cycling([lat,lng],distance,duration,elevation);
            }

            this.#workouts.push(workout);
console.log(workout);


this._renderWorkoutMarker(workout)

        this._renderWorkout(workout);

            this._hideForm()


             this._setLocalStorage();

            ////Display the particular marker
                //  const{lat,lng}=this.#mapEvent.latlng


}


_renderWorkoutMarker(workout) {
    L.marker(workout.coords).addTo(this.#map)
    .bindPopup(L.popup({
        maxWidth:250,
        minWidth:100,
        autoClose:false,
        closeOnClick:false,
        className:`${workout.type}-popup`,
    })).setPopupContent(`${workout.type==='running'?'🏃':'🚴'}${workout.description}`)
    .openPopup();

}

_renderWorkout(workout){

    let html=` <li class="workout workout--${workout.type}" data-id="${workout.id}">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${workout.type==='running'?'running':'cycling'}</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>`;

    if(workout.type==='running')
    {
        html+=`<div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>`;
    }
    if(workout.type==='cycling')
    {
        html+=` <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.ElevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>`;
    }


form.insertAdjacentHTML('afterend',html);

}

_movetoPopup(e)
{
    const workoutEL=e.target.closest('.workout');
    
    if(!workoutEL)
    {
        return ;
    }
    const workout=this.#workouts.find(work=>work.id===workoutEL.dataset.id);
    this.#map.setView(workout.coords,this.#mapzoomlevel,{
        animate:true,
        pan:{
            duration:1
        }
    })
}

_setLocalStorage()
{
    localStorage.setItem('workouts',JSON.stringify(this.#workouts));

}
_getLocalStorage()
{
   const data=JSON.parse(localStorage.getItem('workouts'));
   console.log(data)

   if(!data)return;


   this.#workouts=data;

   this.#workouts.forEach(work=>{
       this._renderWorkout(work);
   })
}

reset()
{
    localStorage.removeItem('workouts');
    location.reload();
}

}
const app=new App();