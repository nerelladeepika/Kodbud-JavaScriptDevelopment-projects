const clock = document.getElementById("clock");
const toggle = document.getElementById("formatToggle");

function updateClock() {
    const now = new Date();

    let hours = now.getHours();   // 0–23
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = "";

    // If toggle is ON → 12-hour format
    if (toggle.checked) {
        ampm = hours >= 12 ? " PM" : " AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
    }
    // ELSE → 24-hour format (keep 13,14,15,...)
    // No conversion needed

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();

toggle.addEventListener("change", updateClock);