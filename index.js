const hideHeaderAfter = 512
let hidden = false
let header = null

window.addEventListener("scroll", (e) => {
    if (!header) header = document.getElementById("header")
    if (window.scrollY > hideHeaderAfter && !hidden){
        header.classList.toggle("hidden")
        hidden = true
    } else if (window.scrollY < hideHeaderAfter && hidden){
        header.classList.toggle("hidden")
        hidden = false
    }
})


