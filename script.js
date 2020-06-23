const date=new Date();

const renderCalender=()=>{
  date.setDate(1); 


const monthDays=document.querySelector('.days')

const lastDay=new Date(date.getFullYear)
date.getMonth()+1,0).getDate();

const prevLastDay=new Date(date.getFullYear(),
date.getMonth()+1,0).getDate();

const firstDayIndex=date.getDay();

console.log(prevLastDay);

console.log(lastDay);

const lastDayIndex= new Date(
  date.getFullYear(),
  date.getMonth()+1,
  0
).getDay();

const nextDays=7-lastDayIndex-1

const month= [
  "January"
  "Feburary"
  "March"
  "April"
  "May"
  "June"
  "July"
  "August"
  "September"
  "October"
  "November"
  "December"
]; 

document.querySelector('.date h1').innerHTML
=months[date.getMonth()];

document.querySelector('.date p').innerHTML=new Date().toDateString();

let days ="";

for(let x = firstDayIndex;x>0;x-- ){
  days+=`<div class="prev-date">${prevLastDay-x + 1}</div>`
}

for(let i = 1; i<=lastDay; i++){
  if(i===new Date().getDate()&& date.getMonth()===new Date().getMonth()){
    days+=`<div Class="today">${i}</div>`;
    
  }else{
  days+=`<div>${i}</div>`;
  }
  monthsDays.innerHTML=days; 
  //x += 10 x = x+10
}

for(let j=1;j<=nextDays; j++){
  day+= `<div class="next-date">${j}</
  div>;
  monthsDays.innerHTML=days;
}

date.setDate(1); 


const monthDays=document.querySelector('.days')

const lastDay=new Date(date.getFullYear)
date.getMonth()+1,0).getDate();

const prevLastDay=new Date(date.getFullYear(),
date.getMonth()+1,0).getDate();

const firstDayIndex=date.getDay();

console.log(prevLastDay);

console.log(lastDay);

const lastDayIndex= new Date(
  date.getFullYear(),
  date.getMonth()+1,
  0
).getDay();

const nextDays=7-lastDayIndex-1

const month= [
  "January"
  "Feburary"
  "March"
  "April"
  "May"
  "June"
  "July"
  "August"
  "September"
  "October"
  "November"
  "December"
]; 

document.querySelector('.date h1').innerHTML
=months[date.getMonth()];

document.querySelector('.date p').innerHTML
=date.toDateString();

let days ="";

for(let x = firstDayIndex;x>0;x-- ){
  days+=`<div class="prev-date">${prevLastDay-x + 1}</div>`
}

for(let i = 1; i<=lastDay; i++){
  if(i===new Date().getDate()&& date.getMonth()===new Date().getMonth()){
    days+=`<div Class="today">${i}</div>`;
    
  }else{
  days+=`<div>${i}</div>`;
  }
  monthsDays.innerHTML=days; 
  //x += 10 x = x+10
}

for(let j=1;j<=nextDays; j++){
  day+= `<div class="next-date">${j}</
  div>;
  monthsDays.innerHTML=days;

  document.querySelector ('.prev').
  addEventListner('click',()=>{
    date.setMonth(date.getMonth()-1);
  renderCalendar();
  });

  document.querySelector(".next").
  addEventListner("click",()=>{
    date.setMonth(date.getMonth()+1);
  });

  renderCalendar();
}