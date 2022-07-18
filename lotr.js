let heroNav = document.getElementById("hero-nav")
let heroDispName = document.getElementById("hero-display-name")
let heroDispImg = document.getElementById("hero-display-image")
let heroDispLikes = document.getElementById("hero-display-likes")
let newHeroForm = document.getElementById("new-hero-form")

// function 1
function renderHero(hero) {
    let heroImg = document.createElement("img")
    heroImg.src = hero.img_url
    heroImg.addEventListener("click", () => showHero(hero))
    heroNav.append(heroImg)
}
// function 2
function showHero(hero) {
    heroDispName.textContent = hero.name
    heroDispImg.src = hero.img_url
    heroDispLikes.textContent = `${hero.likes} likes`
    heroDispLikes.addEventListener("click", addLikes)
}

// function 3. ParseInt is added after typing out your value becoming a split
function addLikes() {
    let likes = parseInt(heroDispLikes.textContent.split(" ")[0])
    likes++
    heroDispLikes.textContent = `${likes} likes`
}
// function 4
function addHero(e) {
    e.preventDefault()
    let newHero = {
        name: newHeroForm["hero-name-input"].value,
        img_url: newHeroForm["hero-image-input"].value,
        likes: 0,
    }
    renderHero(newHero)
    newHeroForm.reset()
}
// Main function. invoke your fecth in the main function. 
//will be the first thing unless you want to declare variables to be used only inside the function (like target events,etc.)
//when doing a POST: create a saveDuck function and replace on renderDuck in the .then.
//stringify your response

function app() {
    fetch("http://localhost:3000/heroes")
        .then(r => r.json())
        .then(heroArr => {
            heroArr.forEach((hero) => {
                renderHero(hero)
                showHero(heroArr[0])
            })
        })
    newHeroForm.addEventListener("submit", addHero)
}

app();