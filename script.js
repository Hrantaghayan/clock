let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')
let time = document.getElementsByClassName('time')[0]
let date = document.getElementsByClassName('date')[0]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let body = document.getElementsByTagName('body')[0]
let clock = document.getElementsByClassName('clock')[0]
console.log(clock)
let forminute
function setTime(){
    // debugger
    let date1 = new Date()
    let forhour = date1.getHours()
   forminute = date1.getMinutes()
    if(forminute<10){
        forminute = `0${forminute}` 
    }
    let forsecond = date1.getSeconds()
    let fordate = ` ${days[date1.getDay()]} : ${months[date1.getMonth()]} : ${date1.getDate()}`
    let fortime = `${forhour}:${forminute}:PM`
    time.innerHTML = fortime 
    date.innerHTML = fordate
    hour.style.transform = `translate(-0%, -100%) rotate(${setHour(forhour)}deg)`
    minute.style.transform = `translate(-0%, -100%) rotate(${setMinute(forminute)}deg)`
    second.style.transform = `translate(-0%, -100%) rotate(${setMinute(forsecond)}deg)`
}

function setHour(hour){
    // debugger
    let degree
  if(hour>12){
    hour = hour-12
   degree = (360/12)*hour
  }
  if(hour<12){
    degree = (360/12)*hour
  }
  if(hour === 0 || hour === 24){
    degree = 0
  }
  if(setMinute(forminute)>(360/4)*2&&setMinute(forminute)<(360/4)*3){
    return degree + 15
  }
  if(setMinute(forminute)>(360/4)*3&&setMinute(forminute)<(360/4)*4){
    return degree + 25
  }
return degree
}
function setMinute(minute){
    // debugger
let degree;
degree = (360/60)*minute
return degree
}
setInterval(function (){
setTime()
},1000)

let btn = document.getElementsByClassName('btn')[0]
let colorarr = [clock,hour,minute,second,time,date,body]
function changecolor1(arr){
    // debugger
for(let i=0;i<arr.length;i++){
    if(arr[i].className==="clock "){
        arr[i].style.borderColor = 'white'
        arr[i].style.backgroundColor = 'black'
    }
    // if(arr[i].id === "hour" || arr[i].id === "minute"||arr[i].id === "second"){
    //     arr[i].style.backgroundColor = 'white'
    // }
   if(arr[i].className==="time"|| arr[i].className==="date"){
    arr[i].style.color = 'white'
   }
  if(arr[i].tagName === "BODY"){
    arr[i].style.backgroundColor = 'black'
  }
}
btn.innerHTML = 'Light Mode'
}
function changecolor2(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].className==="clock "){
            arr[i].style.borderColor = 'black'
            arr[i].style.backgroundColor = 'white'
        }
        // if(arr[i].id === "hour" || arr[i].id === "minute"||arr[i].id === "second"){
        //     arr[i].style.backgroundColor = 'black'
        // }
       if(arr[i].className==="time"|| arr[i].className==="date"){
        arr[i].style.color = 'black'
       }
      if(arr[i].tagName === "BODY"){
        arr[i].style.backgroundColor = 'white'
      }
    }
    btn.innerHTML = 'Dark Mode'
}
btn.addEventListener('click',function(){
    debugger
    if(btn.innerHTML === "Dark Mode"){
        changecolor1(colorarr)
    }
    else{
        changecolor2(colorarr)
    }
})


