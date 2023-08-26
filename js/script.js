// preloader
window.onload=function(){
    document.getElementById("loader").style.display="none";
    document.getElementById("content").style.display="block";
};

// current date
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; 
//Months are zero-based, so adding 1
let day = currentDate.getDate();

let formattedDate = `${day}-${month}-${year}`;

let todayDate = document.getElementById("date");
todayDate.innerHTML = formattedDate;

// current time
function updateTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12;  // Make sure 0 is displayed as 12
    let t_str = hours + ":" + minutes + " " + ampm;

    document.getElementById('time').innerHTML = t_str;
}

// Call updateTime function immediately and then every 1000ms (1 second)
setInterval(updateTime, 1000);