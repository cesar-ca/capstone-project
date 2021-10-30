require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const morgan = require("morgan");
const app = express();

app.use(cors());
app.use(express.json())
// Get all topics
app.get("/api/v1/topics", async (req, res) => {
    try {
        const results = await db.query("select * from topics");
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                topic: results.rows[0],
            }
        });
    } catch (err) {
        console.log(err);
    }
});

// Get a Topic
app.get("api/v1/topic/:id", async (req, res) => {
    try {
        const results = await db.query("select * from topics where id = $1", [req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                topic: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// Create a Topic

app.post("/api/v1/topics", async (req, res) => {
    console.log(req.body);

    try {
        const results = await db.query("INSERT INTO topics (name, difficulty, rango) values ($1, $2, $3) returning *", [req.body.name, req.body.difficulty, req.body.rango]);
        console.log(results);
        res.status(201).json({
            status: "success",
            data: {
                topic: results.rows[0],
            }
        })
    } catch (err) {
        console.log(err)
    }
});

// Update Topic

app.put("/api/v1/topics/:id", async (req, res) => {
    try {
        const results = await db.query("UPDATE topics SET name = $1, difficulty = $2, rango = $3 where id = $4 returning *", [req.body.name, req.body.difficulty, req.body.rango, req.params.id]);
        console.log(results);
        res.status(200).json({
            status: "success",
            data: {
                topic: results.rows[0],
            }
        })
    } catch (err) {
        console.log(err)
    }

    console.log(req.params.id);
    console.log(req.body);
    
});

// Delete Topic

app.delete("/api/v1/topics/:id", async (req, res) => {
    try {
        const results = await db.query("DELETE FROM topics where id = $1", [req.params.id])
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
});