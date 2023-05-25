var days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"]

var months = [
    "jan",
    "feb",
    "mar",
    "april",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"]


const para = document.getElementsByTagName('p')[0]
const countdown = document.getElementsByClassName('countdown')

console.log(para)
const futureDate = new Date("2023-05-30T08:30:40")
console.log(futureDate.getTime())

para.innerText = "university exams are held on " + days[futureDate.getDay()] + ", " + futureDate.getDate() + " " + months[futureDate.getMonth()] + " " + futureDate.getFullYear() + " " + futureDate.getHours() + ":" + futureDate.getMinutes() + " am"
function timer(){
   const  today=new Date()
    console.log(today)
   const timeleft=futureDate.getTime()-today.getTime()
    if (timeleft>0){ countdown[0].children[0].innerText = Math.floor(timeleft / 1000 / 60 / 60 / 24) + " days"

    countdown[0].children[1].innerText = (Math.floor(timeleft / 1000 / 60 / 60) - (Math.floor(timeleft / 1000 / 60 / 60 / 24) * 24)) + " hours"

    countdown[0].children[2].innerText = Math.floor(timeleft / 1000 / 60 - (Math.floor(timeleft/ 1000 / 60 / 60) * 60)) + " minutes"

    countdown[0].children[3].innerText = Math.floor(timeleft/ 1000) - ((Math.floor(timeleft / 1000 / 60) * 60)) + " seconds"
} else {
    countdown[0].innerHTML = "<p>Time expired</p>"
}
}


setInterval(timer, 1000)
