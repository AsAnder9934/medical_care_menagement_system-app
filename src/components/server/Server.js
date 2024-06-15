const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
const port = 3000;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "hospital",
  password: "2588",
  port: 5432,
});

app.get("/api/patient/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query("SELECT * FROM patients WHERE id = $1", [
      id,
    ]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: "Patient not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
