// Fonction 1
let footer = document.querySelector("footer")
i= 0
let clique = function() {
  i++
  console.log("clique " + i)
}

footer.addEventListener("click", clique)

// Fonction 2
let navbar = document.querySelector("#navbarHeader")
let buttonav = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > button")
let toggled = function(){
  navbar.classList.toggle("collapse")
}
buttonav.addEventListener("click", toggled)

// Fonction 3

let card = document.querySelector("body > main > div > div > div > div:nth-child(1) > div")
let edit = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")

let colored  = function(){
  card.style.color = "red"
}

edit.addEventListener("click", colored)

// Fonction 4

let card1 = document.querySelector("body > main > div > div > div > div:nth-child(2) > div")
let edit1 = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
let colored1  = function(){
  card1.style.color = card1.style.color === "green"?"":"green"
}
edit1.addEventListener("click", colored1)

// Fonction 5

let navnuc = document.querySelector(".navbar")
let boots = document.querySelector("head > link")
let removeboots = function(){
  boots.href = boots.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"? "": "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
}
navnuc.addEventListener("dblclick", removeboots)


// Fonction 6
let cardsss = document.querySelectorAll("body > main > div > div > div > div")
cardsss.forEach(function(card) {
  let image = card.querySelector("div > img")
  let imagetext = card.querySelector("div >div > div > p")
  let editbtn = card.querySelector("div > div > div > div > button.btn.btn-sm.btn-outline-secondary") 
  let changesize = function(){
    if (image.style.width === "20%"){
      image.style.width = "80%";
      imagetext.style.display = "block"
    }
    else {
      image.style.width = "20%";
      imagetext.style.display = "none"
    }
  }

  editbtn.addEventListener("mouseenter",changesize)
})

// Fonction 7

let turnover = function(){
  let container = document.querySelector("body > main > div > div > div")
  let lastcard = document.querySelector("body > main > div > div > div > div:nth-child(6)")
  let firstcard = document.querySelector("body > main > div > div > div > div:nth-child(1)")
  container.insertBefore(lastcard, firstcard )
}

let turnbutton = document.querySelector("body > main > section > div > p > a.btn.btn-secondary.my-2")
turnbutton.addEventListener("click", turnover)


// Fonction 8
let reverse = function () {
  let container1 = document.querySelector("body > main > div > div > div")
  let lastcard1 = document.querySelector("body > main > div > div > div > div:nth-child(6)")
  let firstcard1 = document.querySelector("body > main > div > div > div > div:nth-child(1)")
  container1.insertBefore(firstcard1,lastcard1.nextSibling)
}

let reversebutton = document.querySelector("body > main > section > div > p > a.btn.btn-primary.my-2")
reversebutton.href = "#"
reversebutton.addEventListener("click",reverse)

// Fonction 9

let navfocus = document.querySelector(".navbar-brand")
let borderr = function() {
  navfocus.style.color = navfocus.style.color === "red"? "white":"red"
}
navfocus.addEventListener("click",borderr)

let allbody = document.querySelector("body")


  document.addEventListener("keyup", function(e){
    if (navfocus.style.color === "red")
      if (e.key === "a" )
      allbody.className = "col-4"
      else if (e.key === "y")
      allbody.className = "container-fluid col-4"
      else if (e.key === "p")
      allbody.className = "offset-md-8"
      else if (e.key === "b")
      allbody.className = ""
  })
