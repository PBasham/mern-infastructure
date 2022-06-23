/*========================================
        require dependencies
========================================*/

const mongoose = require("mongoose")
/*========================================
        Set up connection to database
========================================*/
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on("connected", () => {
    console.log(`connected to ${db.name} at ${db.host}:${db.port}`)
})