const mounth = "July"  
var day = "thourday"
let year = 2022
console.log(mounth);
console.log(day);
console.log(year);
day = "Friday"
year = year +1
console.log(day)
console.log(year)
var number = document.getElementById("Dadaxon")
setInterval(function (){
    var date = new Date()
    var currientTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    number.innerHTML = currientTime  
}, 1000)

var test1 = document.getElementById("test1")
var test2 = document.getElementById("test2")
var calculateButton = document.getElementById("calculate")
var result = document.getElementById("result")
calculateButton.addEventListener("click" ,function name(){
    result.innerHTML = parseInt(test1.value) + parseInt(test2.value)
})



