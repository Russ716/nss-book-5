import { getPackages, setTechnology } from "./database.js";

let options = getPackages()

let optionHTML = `<select id="package">
<option value="0">Prompt to select package...</option>`
export const optionList = () => {
    for (const option of options) {
        optionHTML += `<option value="${option.id}">${option.name}</option>`
    }
    optionHTML += `</select>
    </ul>`
    return optionHTML
}
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "package") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
            setTechnology(parseInt(chosenOption))
        }
    }
)