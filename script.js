function bookSlot(button) {
    if (button.innerText.includes("Available")) {

        let slotName = button.innerText.split(" - ")[0];

        let bookedSlots = JSON.parse(
            localStorage.getItem("bookedSlots") || "[]"
        );

        bookedSlots.push(slotName);

        localStorage.setItem(
            "bookedSlots",
            JSON.stringify(bookedSlots)
        );

        button.innerText = slotName + " - Booked";
        button.style.backgroundColor = "red";

        alert("Parking slot booked successfully!");

    } else {
        alert("This parking slot is already booked!");
    }
}

// Restore booked slots after refreshing
window.addEventListener("DOMContentLoaded", function () {

    let bookedSlots = JSON.parse(
        localStorage.getItem("bookedSlots") || "[]"
    );

    document.querySelectorAll("button").forEach(function(button) {

        let slotName = button.innerText.split(" - ")[0];

        if (bookedSlots.includes(slotName)) {
            button.innerText = slotName + " - Booked";
            button.style.backgroundColor = "red";
        }

    });

});

   