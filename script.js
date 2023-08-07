// variables
let todayDate = document.getElementById("date");

// current date
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; 
//Months are zero-based, so adding 1
const day = currentDate.getDate();

const formattedDate = `${day}-${month}-${year}`;
console.log(formattedDate);

todayDate.innerHTML = formattedDate;

// current time
function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12;  // Make sure 0 is displayed as 12
    var t_str = hours + ":" + minutes + " " + ampm;

    document.getElementById('time').innerHTML = t_str;
}

// Call updateTime function immediately and then every 1000ms (1 second)
setInterval(updateTime, 1000);