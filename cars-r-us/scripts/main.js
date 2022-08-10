import { htmlBuilder } from "./htmlBuilder.js"


let mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = htmlBuilder()
}

renderAllHTML()
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})