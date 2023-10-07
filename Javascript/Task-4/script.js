function displayDate() {
    var date = new Date();
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthName = months[date.getMonth()];
    document.getElementById("result").textContent = `${date.getDate()} / ${monthName} / ${date.getFullYear()}`;
}
function displayTime() {
    var date = new Date();
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const day = [
        "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sun"
    ];
    const monthName = months[date.getMonth()];
    const dayName = day[date.getDay()];
    const dayOfMonth = String(date.getDate()).padStart(2, '0'); 
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    document.getElementById("result2").textContent = `${dayName} ${monthName} ${dayOfMonth} ${date.getFullYear()} ${hours}:${minutes}:${seconds} GMT +0530 (India Standard Time) `;
}

