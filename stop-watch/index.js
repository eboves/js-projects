let secondElapse = 0
let interval = null

const time = document.getElementById("time")

// thi function add a 0 in from until the value given reach 2 integers
function padStart(value){
    return String(value).padStart(2, "0")
}
// this function set the visual timer by adding the mins and secs.
function setTimer(){
    const min = Math.floor(secondElapse / 60)
    const sec = Math.floor(secondElapse % 60)
    time.innerHTML = `${padStart(min)}:${padStart(sec)}`
}
// this function add the seconds and set the timer to show the seconds. 
function timer(){
    secondElapse++
    setTimer()
}

// this function check if there is an interval if there is one it will stop and resume when click again
function startWatch(){
    if(interval) stopWatch()
    interval = setInterval(timer, 1000)
}

// this function stop the watch by stopping the interval
function stopWatch(){
    clearInterval(interval)
}

// this function reset the stopWatch, clear the interval and set the timer to 00:00
function resetWatch(){
    stopWatch()
    secondElapse = 0
    setTimer()

}