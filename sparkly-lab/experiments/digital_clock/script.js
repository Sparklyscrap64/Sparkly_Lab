const clock = document.getElementById("clock");
const period = document.getElementById("period");
const date = document.getElementById("date");

const formatButton = document.getElementById("format-button");
const dateButton = document.getElementById("date-button");
const clockStatus = document.getElementById("clock-status");

let use24Hour = true;
let showDate = true;

function updateClock() {
    const now = new Date();

    if (use24Hour) {
        clock.textContent = now.toLocaleTimeString("id-ID", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        period.textContent = "";
    } else {
        clock.textContent = now.toLocaleTimeString("en-US", {
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }).replace(/\s?(AM|PM)/, "");

        period.textContent = now.getHours() >= 12 ? "PM" : "AM";
    }

    date.textContent = now.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

formatButton.addEventListener("click", function () {
    use24Hour = !use24Hour;

    formatButton.textContent = use24Hour
        ? "Switch to 12-hour"
        : "Switch to 24-hour";

    clockStatus.textContent = use24Hour
        ? "24-hour format enabled."
        : "12-hour format enabled.";

    updateClock();
});

dateButton.addEventListener("click", function () {
    showDate = !showDate;

    date.style.display = showDate ? "block" : "none";

    dateButton.textContent = showDate
        ? "Hide Date"
        : "Show Date";

    clockStatus.textContent = showDate
        ? "Date is visible."
        : "Date is hidden.";
});

updateClock();

setInterval(updateClock, 1000);