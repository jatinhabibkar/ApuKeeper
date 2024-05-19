const express = require('express')
const app = express()
const connectDB = require('./database/db')
const path = require('path')
const mongoSanitize = require('express-mongo-sanitize');

connectDB()


// init middleware
app.use(express.json({
    extended: true
}))
app.use(mongoSanitize());


app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/keeps', require('./routes/keeps'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
  }

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server start at ${PORT}`))