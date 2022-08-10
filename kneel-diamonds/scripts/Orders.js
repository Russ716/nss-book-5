import { getMetals, getOrders, getSizes, getStyles } from "./database.js"
const styles = getStyles()
const sizes =getSizes()
const metals = getMetals()

const buildOrderListItem = (order) => {
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    let foundMetalPrice = foundMetal.price

    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    let foundSizePrice = foundSize.price

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    let foundStylePrice = foundStyle.price
    const totalCost = foundMetalPrice + foundSizePrice + foundStylePrice
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
        Order #${order.id} will cost ${costString} and was placed on ${order.timestamp}
    </li>`
}
export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

