const app = require('express')()
const bodyParser = require('body-parser')
const router = require('./Routes/index');
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
app.use(router)


app.listen(5000, () => {
    console.log('Server started on port 5000')
})