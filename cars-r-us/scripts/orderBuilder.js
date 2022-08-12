import { getColors, getCustomOrders, getChassis, getPackages, getSeats, getWheels } from "./database.js"

let theColors = getColors()
let theWheels = getWheels()
let theOptions = getPackages()
let theSeats = getSeats()
let theChassis = getChassis()

const buildOrderListItem = (order) => {
    const chosenColor = theColors.find(
        (chosenColor) => {
            return chosenColor.id === order.colorId
        })
    const chosenWheel = theWheels.find((chosenWheel) => {
        return chosenWheel.id === order.wheelId
    })
    const chosenOption = theOptions.find((chosenOption) => {
        return chosenOption.id === order.technologyId
    })
    const chosenSeat = theSeats.find((chosenSeat) => {
        return chosenSeat.id === order.seatId
    })
    const chosenChassis = theChassis.find((chosenChassis) => {
        return chosenChassis.id === order.chassisId
    })
    let totalPrice = chosenColor.price + chosenWheel.price + chosenOption.price + chosenSeat.price
    let multiplier = chosenChassis.multiplier
    totalPrice = totalPrice * multiplier
    return `<li> Order ${order.id} costs $ ${totalPrice}`
}

export const Orders = () => {

    const orders = getCustomOrders()
    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)
    html += listItems.join("")
    html += "</ul>"
    return html
}