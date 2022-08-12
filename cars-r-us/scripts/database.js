const database = {
    colors: [
        { id: 1, color: "Silver", price: 1101.11 },
        { id: 2, color: "Midnight Blue", price: 4065.46 },
        { id: 3, color: "Firebrick Red", price: 4607.96 },
        { id: 4, color: "Spring Green", price: 4034.12 },
        { id: 5, color: "Goldenrod", price: 7077 }
    ],
    packages: [
        { id: 1, name: "Basic Package (basic sound system)", price: 111.11 },
        { id: 2, name: "Navigation Package (includes integrated navigation controls)", price: 397.21 },
        { id: 3, name: "Visibility Package (includes side and rear cameras)", price: 527.37 },
        { id: 4, name: "Ultra Package  (includes navigation and visibility packages)", price: 726.17 }
    ],
    seats: [
        { id: 1, choice: "Beige Cotton", price: 44.44 },
        { id: 2, choice: "Charcoal Wool", price: 94.16 },
        { id: 3, choice: "White Cow's Skin", price: 853.72 },
        { id: 4, choice: "Black Bull's Skin", price: 354.18 }
    ],
    wheels: [
        { id: 1, choice: "17-inch Silver Steel-Belted Radials", price: 111.11 },
        { id: 2, choice: "17-inch Black Titanium Radials", price: 222.22 },
        { id: 3, choice: "18-inch Silver Polished Spokes", price: 333.33 },
        { id: 4, choice: "18-inch Black Matte Spokes", price: 444.44 }
    ],
    chassis: [
        { id: 1, model: "Car", multiplier: 1 },
        { id: 2, model: "SUV", multiplier: 1.5 },
        { id: 3, model: "Truck", multiplier: 2.25 },
    ],
    orderMaker: {},
    carConstructor: [
        { id: 1, colorId: 1, technologyId: 1, seatId: 1, wheelId: 1, chassisId: 1 }
    ]
}

export const getColors = () => {
    return database.colors.map(color => ({ ...color }))
}
export const getChassis = () => {
    return database.chassis.map(chassis => ({ ...chassis }))
}
export const getCustomOrders = () => {
    return database.carConstructor.map(order => ({ ...order }))
}
export const getPackages = () => {
    return database.packages.map(option => ({ ...option }))
}
export const getSeats = () => {
    return database.seats.map(seat => ({ ...seat }))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}
export const setColor = (cId) => {
    database.orderMaker.colorId = cId
}
export const setFrame = (fId) => {
    database.orderMaker.chassisId = fId
}
export const setTechnology = (tId) => {
    database.orderMaker.technologyId = tId
}
export const setWheel = (wId) => {
    database.orderMaker.wheelId = wId
}
export const setSeat = (sId) => {
    database.orderMaker.seatId = sId
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderMaker }
    // Add a new primary key to the object
    const lastIndex = database.carConstructor.length - 1
    newOrder.id = database.carConstructor[lastIndex].id + 1
    // Add a timestamp to the order
    newOrder.timestamp = Date.now()
    // Add the new order object to custom orders state
    database.carConstructor.push(newOrder)
    // Reset the temporary state for user choices
    database.orderMaker = {}
    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
