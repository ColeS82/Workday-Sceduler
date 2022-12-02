

const button1 = document.querySelector('#savebtn-1');
const button2 = document.querySelector('#savebtn-2');
const button3 = document.querySelector('#savebtn-3');
const button4 = document.querySelector('#savebtn-4');
const button5 = document.querySelector('#savebtn-5');
const button6 = document.querySelector('#savebtn-6');
const button7 = document.querySelector('#savebtn-7');
const button8 = document.querySelector('#savebtn-8');
const button9 = document.querySelector('#savebtn-9');

let text1 = document.querySelector('#text-1')
let text2 = document.querySelector('#text-2')
let text3 = document.querySelector('#text-3')
let text4 = document.querySelector('#text-4')
let text5 = document.querySelector('#text-5')
let text6 = document.querySelector('#text-6')
let text7 = document.querySelector('#text-7')
let text8 = document.querySelector('#text-8')
let text9 = document.querySelector('#text-9')

$("#currentDay").text(moment().format('dddd') + ", ");
$("#dateTime").text(moment().format('MMMM Do YYYY', 'h:mm:ss a'));
const hour = moment().hour()

//current time highlighter
if (hour === 9){
        $('#time-9am, #text-1').addClass("text-bg-danger rounded");
}

if (hour === 10){
        $('#time-10am, #text-2').addClass("text-bg-danger rounded");
}

if (hour === 11){
        $('#time-11am, #text-3').addClass("text-bg-danger rounded");
}

if (hour === 12){
        $('#time-12pm, #text-4').addClass("text-bg-danger rounded");
}

if (hour === 13){
        $('#time-1pm, #text-5').addClass("text-bg-danger rounded");
}

if (hour === 14){
        $('#time-2pm, #text-6').addClass("text-bg-danger rounded");
}

if (hour === 15){
        $('#time-3pm, #text-7').addClass("text-bg-danger rounded");
}

if (hour === 16){
        $('#time-4pm, #text-8').addClass("text-bg-danger rounded");
}

if (hour === 17){
        $('#time-5pm, #text-9').addClass("text-bg-danger rounded");
}

//applying past styling for any row less that the current hour
if (9 < hour){
        $('#time-9am, #text-1').addClass("text-bg-secondary rounded");
}
if (10 < hour){
        $('#time-10am, #text-2').addClass("text-bg-secondary rounded");
}
if (11 < hour){
        $('#time-11am, #text-3').addClass("text-bg-secondary rounded");
}
if (12 < hour){
        $('#time-12pm, #text-4').addClass("text-bg-secondary rounded");
}
if (13 < hour){
        $('#time-1pm, #text-5').addClass("text-bg-secondary rounded");
}
if (14 < hour){
        $('#time-2pm, #text-6').addClass("text-bg-secondary rounded");
}
if (15 < hour){
        $('#time-3pm, #text-7').addClass("text-bg-secondary rounded");
}
if (16 < hour){
        $('#time-4pm, #text-8').addClass("text-bg-secondary rounded");
}
if (17 < hour){
        $('#time-5pm, #text-9').addClass("text-bg-secondary rounded");
}

//applying styling to future times greater than the current hour

if (9 > hour){
        $('#time-9am, #text-1').addClass("text-bg-success rounded");
}
if (10 > hour){
        $('#time-10am, #text-2').addClass("text-bg-success rounded");
}
if (11 > hour){
        $('#time-11am, #text-3').addClass("text-bg-success rounded");
}
if (12 > hour){
        $('#time-12pm, #text-4').addClass("text-bg-success rounded");
}
if (13 > hour){
        $('#time-1pm, #text-5').addClass("text-bg-success rounded");
}
if (14 > hour){
        $('#time-2pm, #text-6').addClass("text-bg-success rounded");
}
if (15 > hour){
        $('#time-3pm, #text-7').addClass("text-bg-success rounded");
}
if (16 > hour){
        $('#time-4pm, #text-8').addClass("text-bg-success rounded");
}
if (17 > hour){
        $('#time-5pm, #text-9').addClass("text-bg-success rounded");
}

//set function to be performed on click of specified button
button1.addEventListener("click", storeText1);
button2.addEventListener("click", storeText2);
button3.addEventListener("click", storeText3);
button4.addEventListener("click", storeText4);
button5.addEventListener("click", storeText5);
button6.addEventListener("click", storeText6);
button7.addEventListener("click", storeText7);
button8.addEventListener("click", storeText8);
button9.addEventListener("click", storeText9);

//stores the input from the text area into local storage
function storeText1(){
        localStorage.setItem("text-1", text1.value)
}
function storeText2(){
        localStorage.setItem("text-2", text2.value)
}
function storeText3(){
        localStorage.setItem("text-3", text3.value)
}
function storeText4(){
        localStorage.setItem("text-4", text4.value)
}
function storeText5(){
        localStorage.setItem("text-5", text5.value)
}
function storeText6(){
        localStorage.setItem("text-6", text6.value)
}
function storeText7(){
        localStorage.setItem("text-7", text7.value)
}
function storeText8(){
        localStorage.setItem("text-8", text8.value)
}
function storeText9(){
        localStorage.setItem("text-9", text9.value)
}

//retrieves text from local storage to display in the text area after refresh
let = textOutput = localStorage.getItem('text-1')
text1.textContent = textOutput;

let = textOutput = localStorage.getItem('text-2')
text2.textContent = textOutput;

let = textOutput = localStorage.getItem('text-3')
text3.textContent = textOutput;

let = textOutput = localStorage.getItem('text-4')
text4.textContent = textOutput;

let = textOutput = localStorage.getItem('text-5')
text5.textContent = textOutput;

let = textOutput = localStorage.getItem('text-6')
text6.textContent = textOutput;

let = textOutput = localStorage.getItem('text-7')
text7.textContent = textOutput;

let = textOutput = localStorage.getItem('text-8')
text8.textContent = textOutput;

let = textOutput = localStorage.getItem('text-9')
text9.textContent = textOutput;



//** More concise solution below**

// const timeArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
// const $rows = document.querySelectorAll('#time-slots > section');
// const $timeSlots = document.querySelectorAll('section > .time');
// const $todos = document.querySelectorAll('section > .todos');
// const $txt = document.querySelectorAll('textarea')
// const hour = new Date().getHours()

// console.log(hour)

// //draws containers for $timeSlots
// for (let i = 0; i < $rows.length; i++){
//     $rows[i].className = 'row border';
//     $timeSlots[i].className = 'col-sm-3 ';
//     $todos[i].className = 'col-sm-9';
//     $txt[i].className = 'border-0 text-bg-light'
//     $txt[i].style= 'width: 100%;';
    

// }

// //** conditionally sets colors according to time**
// for (let i=0; i < timeArray.length; i++){
// if (hour == timeArray[i]){
//     $rows[i].classList.add('bg-danger');
// }else if (hour < timeArray[i]){
//     $rows[i].classList.add('text-bg-success')
// }else {
//     $rows[i].classList.add('text-bg-secondary')
// }
// }


// console.log($rows)
// console.log($timeSlots)
// console.log($todos)
// console.log($txt)
