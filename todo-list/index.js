let items = []
const storageKey = "items"
const itemDiv = document.getElementById("items")
const itemInput = document.getElementById("itemInput")

function loadItems(){
    const oldItems = localStorage.getItem(storageKey)
    if(oldItems) items = JSON.parse(oldItems)
    renderItems()
}

function renderItems() {
    itemDiv.innerHTML = null

    for(const [idx, item] of Object.entries(items)){
        const container = document.createElement('div')
        container.style.marginBottom = "10px"

        const text = document.createElement('p')
        text.style.display = "inline"
        text.style.marginRight = '10px'
        text.textContent = item

        const button = document.createElement("button")
        button.textContent = "Delete item"
        button.onclick = () => removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)

        itemDiv.appendChild(container)
    }
}

function saveItems() {
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringItems)
}

function addItems() {
    const value = itemInput.value

    if (!value){
        alert("You can not add an empty item")
        return
    }
    items.push(value)
    renderItems()
    itemInput.value = ""
    saveItems()
}

function removeItem(idx) {
    items.splice(idx, 1)
    renderItems()
    saveItems()
}


document.addEventListener("DOMContentLoaded", loadItems)