const personForm = document.querySelector('#personForm')
//const foodForm = document.querySelector('#foodForm')
function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector("#details")
    const name = f.personName.value
    const favoriteColor = f.favoriteColor.value
    const age = f.age.value

    const colorDiv = `<div></div>`
    //const heading=document.querySelector("h1")
   // const paragraph=document.querySelector('#foodForm')
    //console.log(f.personName.value)
//     const boldedName = document.createElement("strong")
//     boldedName.textContent = name
//     heading.textContent = f.personName.value + " favorite food is "+ f.foodName.value
//     paragraph.textContent = f.foodName.value + " is " + f.personName.value + " favorite food"
//     paragraph.style.fontSize= smaller
//     details.appendChild(boldedName)
    details.innerHTML =`
    <ul>
        <li>Name: ${name}</li>
        <li>Favorite Color: ${favoriteColor}</li>
        <li>Age:${age}</li>
    </ul>`
}
personForm.addEventListener("submit", handleSubmit)



