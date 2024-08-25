const input = document.getElementById('input')

// this function reverse the passed str and using split and join.
function reverseString(str){
     return str.split("").reverse().join("")
}

// this function check to see if the word is palindrome.
function check(){
    const value = input.value
    const reverse = reverseString(value)

    if (value === reverse){
        alert("P A L I N D R O M E")
    }else {
        alert("is not a palindrome sydrom")
    }
    input.value = ""
}