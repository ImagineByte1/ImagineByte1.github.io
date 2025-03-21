function scrollUp() {
    const sections = document.querySelectorAll("section");
    let currentPosition = window.scrollY;
    for (let i = sections.length - 1; i >= 0; i--) {
        if (currentPosition > sections[i].offsetTop) {
            window.scrollTo({ top: sections[i].offsetTop, behavior: 'smooth' });
            break;
        }
    }
}

function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}