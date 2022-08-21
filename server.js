const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const morgan = require('morgan')


//Load config
dotenv.config({ path: './config/config.env' })

//connects to the db
connectDB()

const app = express()

// Beginning of middlewares
// Shows every HTTP request/errors I make in the console
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
//Allows the server to be able to interact with the ejs file(s)
app.set('view engine', 'ejs')

//static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())



//Routes
app.use('/', require('./routes/index'))






const PORT = process.env.PORT || 3000


app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))


