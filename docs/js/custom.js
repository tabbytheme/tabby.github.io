

const format = ["years", "months", "days", "hours", "minutes", "seconds"];
const timePassed = document.querySelector("#time-passed");
const target = document.querySelector("#app");
const intValue = target.innerText;
const initDate = new Date(intValue);

function getDiff(targetDate, highestLevel) {
    setInterval(() => {
        const initDate = targetDate;
        const currentDate = new Date();

        const invervalInAllFormats = intervalToDuration({
            start: initDate,
            end: currentDate,
        });

        console.log(invervalInAllFormats);

        const targetIndex = format.indexOf(highestLevel);
        console.log("target index", targetIndex);

        const finalFormat = format.slice(targetIndex + 1);
        console.log("finalFormat", finalFormat);

        const rest = {};
        finalFormat.map((x) => {
            const value = invervalInAllFormats[x];
            rest[x] = value;
        });

        // const justMonths = formatDuration()
        const a = moment(initDate);
        const b = moment(currentDate);
        const highestValue = a.diff(b, highestLevel);

        rest[highestLevel] = highestValue;

        console.log("rest", rest);

        const y = formatDuration(rest, {
            zero: true,
            format: [highestLevel, ...finalFormat],
        });

        timePassed.innerHTML = `${y}`;
    }, 1000);
}

// final call
getDiff(initDate, "hours");
