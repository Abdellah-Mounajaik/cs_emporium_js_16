let body = document.querySelector('body')

let noir = document.querySelector(".noir")

let blanc = document.querySelector(".blanc")

let li = document.querySelector("li")
let li2 = document.querySelectorAll("li")[1]
let li3 = document.querySelectorAll("li")[2]
let li4 = document.querySelectorAll("li")[3]
let li5 = document.querySelectorAll("li")[4]
let li6 = document.querySelectorAll("li")[5]
let li7 = document.querySelectorAll("li")[6]
let t2 = document.querySelector('.t2')
let t1p = document.querySelector('.t1p')

noir.addEventListener('click',()=>{
    body.style.backgroundColor = 'black'
    body.style.color = "white"
    li.style.color = "black"
    li2.style.color = "black"
    li3.style.color = "black"
    li4.style.color = "black"
    li5.style.color = "black"
    li6.style.color = "black"
    li7.style.color = "black"
    t2.style.color = "black"
    t1p.style.color = "black"
    header.style.color = "black"
})

blanc.addEventListener('click',()=>{
    body.style.backgroundColor = "white"
    body.style.color = "black"
    li.style.color = "black"
    li2.style.color = "black"
    li3.style.color = "black"
    li4.style.color = "black"
    li5.style.color = "black"
    li6.style.color = "black"
    li7.style.color = "black"
    header.style.zIndex = "1"
})

let header = document.querySelector('.header')
let h1 = document.querySelectorAll('h1')[0]
let vis = document.querySelector('.cacher')
window.addEventListener("scroll",()=>{
    if (window.scrollY > 100) {
        h1.className = ("visible, invisible")
    } else {
        
    }
    if (window.scrollY > 100) {
        h1.className = ("d-flex","d-none, float-left mb-5")
    }
})

let connexion = document.querySelector("#connexion")
let modal = document.querySelector('#modal')
modal.style.display = "none"
connexion.addEventListener('click', ()=>{
    modal.style.display = "flex"
})
let inscrire = document.querySelector(".inscrire")
let modal2 = document.querySelector('#modal2')
modal2.style.display = "none"
inscrire.addEventListener('click',()=> {
    modal2.style.display = "flex"
})


let fermer = document.querySelectorAll(".close")[0]
let fermer2 = document.querySelectorAll('.close')[1]
fermer.addEventListener('click',()=>{
    modal.style.display = "none"
})
fermer2.addEventListener('click',()=>{
    modal2.style.display = "none"

})

