

const button = document.querySelector('button')
$("#currentDay").text(moment().format('dddd') + ", ");
$("#dateTime").text(moment().format('MMMM Do YYYY', 'h:mm:ss a'));
const hour = moment().hour()
let text1 = document.querySelector('#text-1')

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

button.addEventListener("click", storeText);

//stores the input from the text area into local storage
function storeText(){
        localStorage.setItem("text-1", text1.value)
}

//retrieves text from local storage to display in the text area after refresh
let = textOutput = localStorage.getItem('text-1')
text1.textContent = textOutput


//for future reference try to dry up the code with these methods
// const time = [9, 10, 11]

// for (i = 0; i < time.length; i++) {
//    console.log(`row-${time[i]}`) //-- template literal, back ticks are important here
 
// }

// const elements = document.querySelectorAll(".hour-9")
// for (const element of elements){
//         let id = element.getAttribute("id")        
//         console.log(id)
// }



