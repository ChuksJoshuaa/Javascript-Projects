//const li = document.createElement("li")
//li.textContent = leads[i]
//ulEl.append(li)

let saveEl = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let leads = []

saveEl.addEventListener("click", function() {
       leads.push(inputEl.value)
        inputEl.value = ""

       let ok = render()
       return ok
})

   function render() {
       let listItems = ""
       for(var i = 0; i < leads.length; i++) {
             listItems += `<li><a target="blank" href="${leads[i]}">${leads[i]}</a></li>`
          console.log(listItems)
       }
       ulEl.innerHTML = listItems
   }
