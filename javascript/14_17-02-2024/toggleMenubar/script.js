function ShowMenu() {
    // target = nav class, replacement class = navigation
    // who work = button
    let navbar = document.querySelector(".nav");
    let i = document.getElementById("icon");
    navbar.classList.toggle("navigation");

    // icon change
    if (navbar.classList.contains("navigation") == true) {
        i.classList.remove("fa-bars");
        i.classList.add("fa-close");
    } else {
        i.classList.remove("fa-close");
        i.classList.add("fa-bars")
    }
}
// ============================================
// target = header perform = window replacement class = topheader 
let h = document.querySelector("header");
window.addEventListener("scroll", () => {
    let current = window.scrollY;
    if (current > 0) {
        h.classList.add("topheader");
    } else {
        h.classList.remove("topheader");
    }
})
// ==============================
function showDrop() {
    // target = menu class, perform - dropdown,li
    let m = document.querySelector(".menu");
    m.classList.toggle("drop")
}