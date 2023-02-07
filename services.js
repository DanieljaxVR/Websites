let header = document.getElementById("hidden_head")
let text = document.getElementById("hidden_p")
let hidEl = document.getElementById("hidden_element")
const options = document.getElementById("options")
const sideBar = document.getElementById("side-bar")

options.addEventListener("click", function() {
    sideBar.style.display = "block"
    sideBar.style.right = "0"
})

const pressureWashing = {
    header: "Pressure Washing",
    text: "We do pressure washing also"
}
const curbPainting = {
    header: "Curb painting",
    text: `we will spray paint your address on your curb.
     This makes it easier for emergency responders to find your house in case of need. It's also helpful for your everyday mailman or pizza delivery driver`
}
const carWashing = {
    header: "Car Detailing",
    text: "We will detail your car in for a very good price!"
}
const garageCleaning = {
    header: "Garage and Shed Cleaning",
    text: "We will clean out your garage and make it look like new again!"
}

function renderHidden(obj) {
    hidEl.style.display = "block";
    header.textContent = obj.header
    text.textContent = obj.text
}
