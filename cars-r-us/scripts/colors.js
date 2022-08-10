import { getColors, setColor } from "./database.js";

let colors = getColors()

let colorHTML = `<select id="paint">
<option value="0">Prompt to select paint...</option>`
export const colorList = () => {
    for (const color of colors) {
        colorHTML += `<option value="${color.id}">${color.color}</option>`
    }
    colorHTML += `</select>
    </ul>`
    return colorHTML
}
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            const chosenColor = changeEvent.target.value
            console.log(chosenColor)  // "1" or "2"
            setColor(parseInt(chosenColor))
        }
    }
)