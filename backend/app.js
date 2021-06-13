const express = require("express");


const app = express()


var orders = []

app.get("create", (req, res,) => {
    console.log("create")
    orders.push(JSON.parse(req.query))
    console.log(orders)
    res.sendStatus(200)
})


app.get("list", (req, res,) => {
    console.log("list")
    console.log(orders)
    res.send(JSON.stringify(orders))
})

app.get("delete", (req, res,) => {
    console.log("close")
    const hash = req.query["hash"]
    if (!hash) {
        res.sendStatus(201)
        return
    }
    orders = orders.filter(order => order.interaction !== hash)
    res.send(JSON.stringify(orders))
})

app.get("close", (req, res,) => {
    console.log("close")
    const hash = req.query["hash"]
    if (!hash) {
        res.sendStatus(201)
        return
    }
    orders = orders.filter(order => order.interaction !== hash)
    res.send(JSON.stringify(orders))
})


app.listen(port = 3001, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})