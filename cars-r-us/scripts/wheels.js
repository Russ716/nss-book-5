import { getWheels, setWheel } from "./database.js"

let wheels = getWheels()
let wheelHTML = `<select id="hub">
<option value="0">Prompt to select hub...</option>`
export const wheelList = () => {
    for (const wheel of wheels) {
        wheelHTML += `<option value="${wheel.id}">${wheel.choice}</option>`
    }
    wheelHTML += `</select>
    </ul>`
    return wheelHTML
}
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "hub") {
            const chosenWheel = changeEvent.target.value
            console.log(chosenWheel)  // "1" or "2"
            setWheel(parseInt(chosenWheel))
        }
    }
)
