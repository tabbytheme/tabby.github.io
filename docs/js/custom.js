const intValue = "Sept 15 2021";
const initDate = new Date(intValue);

const hourTarget = document.querySelector(".hours");
const minuteTarget = document.querySelector(".minutes");
const secondTarget = document.querySelector(".seconds");

function getDiff(targetDate) {
    const initDate = moment(targetDate);
    const currentDate = moment(new Date());

    var ms = moment(initDate, "DD/MM/YYYY HH:mm:ss").diff(
        moment(currentDate, "DD/MM/YYYY HH:mm:ss")
    );
    var d = moment.duration(ms);
    var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

    const [hours, minutes, seconds] = s?.split(":");

    hourTarget.innerText = hours;
    minuteTarget.innerText = minutes;
    secondTarget.innerText = seconds;
}

// final call
getDiff(initDate);

// run after each second
setInterval(() => getDiff(initDate), 1000);
