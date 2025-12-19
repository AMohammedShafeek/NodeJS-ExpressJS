import express from 'express'

const app = express()

const PORT = 3000

const users = [
    {
        id: 1,
        userName: 'Mohammed Shafeek. A'
    },
    {
        id: 2,
        userName: 'Malavika. G'
    },
    {
        id: 3,
        userName: 'Sivaponnuvel .S'
    },
]
app.get('/', (req, res) => {
    res.send({ msg: "Root" })
})

app.get('/api/users', (req, res) => {
    res.send(users)
})

app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
        return res.status(400).send({ msg: "Bad Request. Invalid ID" })
    }
    const user = users.find((user) =>
        (user.id === id)
    )
    if (user) {
        return res.send(user)
    }
    return res.status(404).send({ msg: "User Not Found" })
})

app.listen(PORT, () => {
    console.log(`App is Running on PORT: ${PORT}`);

})