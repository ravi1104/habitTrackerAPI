const express = require('express');
const habitController = require('./src/controller');
const { connectToDatabase } = require('./config/db');
const cors = require('cors');

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors());
const arr=[3,5,6,7];
// Routes
app.post('/api/habits', habitController.createHabit);
app.get('/api/habits', habitController.getAllHabits);
app.post('/api/habits/update',habitController.updateStatus)
app.get('/api/habits/:day', habitController.getHabitsForDay);
app.get('/test',(req,res)=>{
    const {gt ,lt}=req.query;
    console.log(gt,lt);
    const ans=arr.filter((ele)=>ele>gt && ele<lt )
    res.json(ans)
})
// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
    await connectToDatabase();
    console.log(`Server is running on port ${PORT}`);
});
