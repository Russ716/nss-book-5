import { getSeats, setSeat } from "./database.js";

let seats = getSeats()

let seatHTML = `<select id="material">
<option value="0">Prompt to select material...</option>`
export const seatList = () => {
    for (const seat of seats) {
        seatHTML += `<option value="${seat.id}">${seat.choice}</option>`
    }
    seatHTML += `</select>
    </ul>`
    return seatHTML
}
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "material") {
            const chosenSeat = changeEvent.target.value
            console.log(chosenSeat)  // "1" or "2"
            setSeat(parseInt(chosenSeat))
        }
    }
)