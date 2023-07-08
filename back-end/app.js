const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql2/promise");
const app = express();

// Connection.
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Admin@1234",
  database: "orbit",
  connectionLimit: 5,
});

app.use(morgan("tiny"));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello, world" });
});

// Companies
app.get("/companies", async (req, res, next) => {
  try {
    const [companies] = await db.query("SELECT * FROM companies");

    res.json({ data: companies });
  } catch (err) {
    next(err);
  }
});

app.post("/companies", async (req, res, next) => {
  const { name } = req.body;

  try {
    const [result] = await db.query("INSERT INTO companies (name) VALUES (?)", [name]);

    res.json({ data: result.insertId });
  } catch (err) {
    next(err);
  }
});

// Contacts
app.get("/contacts", async (req, res, next) => {
  try {
    const [contacts] = await db.query("SELECT * FROM contacts");

    res.json({ data: contacts });
  } catch (err) {
    next(err);
  }
});

app.post("/contacts", async (req, res, next) => {
  const { firstName } = req.body;

  try {
    const [result] = await db.query("INSERT INTO contacts (firstName) VALUES (?)", [firstName]);

    res.json({ data: result.insertId });
  } catch (err) {
    next(err);
  }
});

// Deals
app.get("/deals", async (req, res, next) => {
  try {
    const [deals] = await db.query("SELECT * FROM deals");

    res.json({ data: deals });
  } catch (err) {
    next(err);
  }
});

app.post("/deals", async (req, res, next) => {
  const { name } = req.body;

  try {
    const [result] = await db.query("INSERT INTO deals (name) VALUES (?)", [name]);

    res.json({ data: result.insertId });
  } catch (err) {
    next(err);
  }
});

// Quotes
app.get("/quotes", async (req, res, next) => {
  try {
    const [quotes] = await db.query("SELECT * FROM quotes");

    res.json({ data: quotes });
  } catch (err) {
    next(err);
  }
});

app.post("/quotes", async (req, res, next) => {
  const { name } = req.body;

  try {
    const [result] = await db.query("INSERT INTO quotes (name) VALUES (?)", [name]);

    res.json({ data: result.insertId });
  } catch (err) {
    next(err);
  }
});

// Tickets
app.get("/tickets", async (req, res, next) => {
  try {
    const [tickets] = await db.query("SELECT * FROM tickets");

    res.json({ data: tickets });
  } catch (err) {
    next(err);
  }
});

app.post("/tickets", async (req, res, next) => {
  const { name } = req.body;

  try {
    const [result] = await db.query("INSERT INTO tickets (name) VALUES (?)", [name]);

    res.json({ data: result.insertId });
  } catch (err) {
    next(err);
  }
});

// Tasks
app.get("/tasks", async (req, res, next) => {
  try {
    const [tasks] = await db.query("SELECT * FROM tasks");

    res.json({ data: tasks });
  } catch (err) {
    next(err);
  }
});

app.post("/tasks", async (req, res, next) => {
  const { name } = req.body;

  try {
    const [result] = await db.query("INSERT INTO tasks (name) VALUES (?)", [name]);

    res.json({ data: result.insertId });
  } catch (err) {
    next(err);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Application is up and running on port ${PORT}`);
});
