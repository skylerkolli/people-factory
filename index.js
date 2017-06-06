const personForm = document.querySelector("#personForm")
//const foodForm = document.querySelector('#foodForm')
function renderColor(color){
    const div =document.createElement("div")
    div.style.backgroundColor = color
    div.style.width = "100px"
    div.style.height = "50px"


    return div
}

function renderListItem(label,value) {
 const item = document.createElement("li")
 item.textContent= `${label}: ${value}`

 return item
}



function renderList(personData){
    const list = document.createElement("ul")
    Object.keys(personData).map(function(label) {
        renderListItem(label, personData[label])
        
    })
    return list              
}

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector("#details")
    const name = f.personName.value
    const favoriteColor = f.favoriteColor.value
    const age = f.age.value
    const person= {
        name: "Sari",
        favoriteColor: "black",
        age: "confidential",
    }
    details.appendChild(renderList(person))
    //const colorDiv = <div style="background-color: ${favoriteColor}; width: 100px; height: 50px;"></div>
    
   
    // const nameItem = documents.createElement("li")
    // nameItem.textContent= `Name: ${name}`
    
    // const colorItem = documents.createElement("li")
    // colorItem.innerHTML= `Favorite Color: ${renderColor(favoriteColor).outerHTML}`
   
    // const ageItem = documents.createElement("li")
    // ageItem.textContent= `Age:${age}`
       
    const list = documents.createElement("ul")
    list.appendChild(nameItem)
    list.appendChild(colorItem)
    list.appendChild(ageItem)

    details.appendChild(list)
        //const heading=document.querySelector("h1")
   // const paragraph=document.querySelector('#foodForm')
    //console.log(f.personName.value)
    
    
//     const boldedName = document.createElement("strong")
//     boldedName.textContent = name
//     details.appendChild(boldedName)

//     heading.textContent = f.personName.value + " favorite food is "+ f.foodName.value
//     paragraph.textContent = f.foodName.value + " is " + f.personName.value + " favorite food"
//     paragraph.style.fontSize= smaller

    // details.innerHTML =`
    //     <ul>
    //      <li>Name: ${name}</li>
    //      <li>Favorite Color: ${favoriteColor}</li>
    //      <li>Age:${age}</li>
    //     </ul>`
    
}
personForm.addEventListener("submit", handleSubmit)



