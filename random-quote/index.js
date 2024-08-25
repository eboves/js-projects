const quotes = [
    "hola",
    "me llamo",
    "pepito",
    "necesito",
    "dejar",
    "de hacer",
    "varias cosas"
]
// this create a new Set: does not allow duplicates
const alreadyUsed = new Set()
const quoteElement = document.getElementById('quote')

// this function gets called when a button is click
function generate_quote(){
    if (alreadyUsed.size >= quotes.length){
        alreadyUsed.clear()
    }
// this while loop check if the quote has been used or not
    while(true){
        const random_quote = Math.floor(Math.random() * quotes.length)
        if(alreadyUsed.has(random_quote)) continue
        
        const quote = quotes[random_quote]
        quoteElement.innerHTML = quote
        alreadyUsed.add(quote)
        break
    }
    
}