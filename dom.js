// call showtime to render at every second
setInterval(showTime, 1000);


//define a funct for showing Date and day
function showDate(){
    //get the current date
    let time = new Date();
    let days = time.getDay();
    let date = String(time.getDate()).padStart(2,"0");
    let month = String(time.getMonth()+1).padStart(2,"0");
    let year = time.getFullYear();

    let currentDate = days + ", " + date + ", " + month +", " + year;
    // also can use format below
    //let currentDate = '${days} - ${date} - ${month} - ${year}';

    // show time on wepage
    document.getElementById("day").innerHTML = currentDate;
}

