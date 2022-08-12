import { colorList } from "./colors.js"
import { optionList } from "./options.js"
import { seatList } from "./seats.js"
import { wheelList } from "./wheels.js"
import { Orders } from "./orderBuilder.js"
import { addCustomOrder, getChassis, setFrame} from "./database.js"

let theChassis = getChassis()
let theColors = colorList()
let theWheels = wheelList()
let theOptions = optionList()
let theSeats = seatList()


let frameHTML = `<select id="chassis">
<option value="0">Prompt to select style...</option>`
export const frameList = () => {
    for (const frame of theChassis) {
        frameHTML += `<option value="${frame.id}">${frame.model}</option>`
    }
    frameHTML += `</select>
    </ul>`
    return frameHTML
}
let theFrames = frameList()
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "chassis") {
            console.log(changeEvent.target.value)  // "1" or "2"
            setFrame(parseInt(changeEvent.target.value))
        }
    }
)

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "orderButton") {
            addCustomOrder();
        }
    }
)

export const htmlBuilder = () => {
    return `
        <h1>Stan S. Stanman's Custom Automobile Builder </h1>
    <article class="chassis">
    <section class="Chassis">
    <h2>Body Style</h2> ${theFrames}
        <article class="choices">
            <section class="choices__Colors options">
                <h2>Exterior Paint Colors</h2> ${theColors}    
            </section>
            <section class="choices__Wheels options">
                <h2>Custom Wheel Options</h2> ${theWheels}
            </section>
            <section class="choices__Fabrics options">
                <h2>Premium Seat Fabrics</h2> ${theSeats}
            </section>  
            <section class="choices__Options options">
            <h2>Deluxe Electronic Packages</h2> ${theOptions}
        </section>
        </article>
        <article>
        <button id="orderButton">Create Custom Car</button>
    </article>
    <article class="customOrders">
    <h2>Custom Car Order History</h2>
    ${Orders()} 
</article>
    `
}
