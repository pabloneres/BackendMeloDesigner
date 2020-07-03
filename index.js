const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const User = require('./src/models/User')

const app = express()
const routes = express.Router()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-pwdxr.mongodb.net/melodesigner?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})



routes.post('/send', async function(req, res){
    const {template, plan, name, tel, email, message} = req.body

    const user = await User.create({
        template,
        plan,
        name,
        tel,
        email,
        message
        })


return res.json({status: 'success'})

})

routes.get('/index', async function(req, res){
    const user = await User.find()

        return res.json(user)
})


app.use(routes)

app.listen(process.env.PORT || 3333, (
    console.log('server is running')
))