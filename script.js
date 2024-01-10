document.addEventListener("DOMContentLoaded", () => {
    const hi = document.querySelector("#hi");
    setTimeout(() => {
        hi.classList.add("visible");
    }, 500);
})
document.addEventListener("DOMContentLoaded", () => {
    const name = document.querySelector("#name");
    setTimeout(() => {
        name.classList.add("visible");
    }, 1000);
})
document.addEventListener("DOMContentLoaded", () => {
    const lastname = document.querySelector("#lastname");
    setTimeout(() => {
        lastname.classList.add("visible");
    }, 1500);
})
document.addEventListener("DOMContentLoaded", () => {
    const description = document.querySelector("#description");
    setTimeout(() => {
        description.classList.add("visible");
    }, 2000);
})

let section=document.querySelectorAll('section')
let navLink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>offset && top<offset + height){
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}