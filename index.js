const personForm = document.querySelector('#personForm')
const foodForm = document.querySelector('#foodForm')
function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const heading=document.querySelector("h1")
    const paragraph=document.querySelector('#foodForm')
    console.log(f.personName.value)
    heading.textContent = f.personName.value + " favorite food is "+ f.foodName.value
    paragraph.textContent = f.foodName.value + " is " + f.personName.value + " favorite food"
    paragraph.style.fontSize= smaller
}
personForm.addEventListener("submit", handleSubmit)



