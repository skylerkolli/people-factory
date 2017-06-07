const sportsForm = document.querySelector("#sportsForm")


function doSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    
    console.log(f.sportName.value)
    
const name = f.sportName.value
const sport = document.querySelector("#sport")
sport.innerHTML += `<li> ${name}</li>`
}
    




sportsForm.addEventListener("submit", doSubmit)