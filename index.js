// document.getElementById("count-el").innerText 

//initialize count at 0 
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")
// we are passing the argument count-el
let count = 0
let saveEl = document.getElementById("save-el")


function increment() {
    count +=1; 
    // countEl.innerText = count
    countEl.textContent = count
    
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0 
    count = 0

}
// textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements.
// textContent returns every element in the node. In contrast, innerText is aware of styling and won't return the text of "hidden" elements.


console.log("Let's count the number of people on the subway!")