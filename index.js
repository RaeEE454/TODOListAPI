const express = require("express");
const app = express();
const pool = require("./db");


app.use(express.json())  //=> req.body

//Routes//

// get all todos

app.get("/todos", async (req,res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");

        res.json(allTodos.rows);
    }catch (err){
        console.error(err.message)
    }
})

// get a todo

// create a todo

app.post("/todos", async(req, res) => {
    try{
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *",
         [description]
         );

         res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a todo

//delete a todo



app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});