import express from "express";
import mysql2 from 'mysql2';
import dotenv from 'dotenv';
import { validateForm } from "./validate.js";

const app = express();

const PORT=3007;
app.set("view engine", 'ejs');

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
dotenv.config();

// const contacts=[]

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
}).promise();

const projects=[
    {
        "name":"Cloudforge",
        "tech":["Node.js","SQL","EJS"],
        "img":"./imgs/cloudforge.png",
        "alt":"Website showing trading and gaming cards",
        "github":"https://github.com/sabinMas/CloudForge",
        "desc":"Cloudforge allows user to store trading and gaming cards to a digital library! I help build the upload logic, the navbar, server side validtion, and database setup"
    },
    {
        "name": "Cloudforge",
        "tech": ["Node.js", "SQL", "EJS"],
        "img": "./imgs/cloudforge.png",
        "alt": "Website showing trading and gaming cards",
        "github": "https://github.com/sabinMas/CloudForge",
        "desc": "Cloudforge allows user to store trading and gaming cards to a digital library! I help build the upload logic, the navbar, server side validtion, and database setup"
    }
]

app.get('/', (req, res) => {
    res.render(`index`)
})
app.get('/contact', (req,res)=>{
    res.render('contact', { errors: null })
})
app.get('/portfolio',(req,res)=>{
    res.render("portfolio", {projects})
})
app.post("/confirm", async (req, res) => {
    const contact = req.body;
    const valid = validateForm(contact);
    if (!valid.isValid) {
        console.log(valid);
        res.render('contact', { errors: valid.errors })
        return;
    }

    const params = [
        contact.fname,
        contact.lname,
        contact.email,
        contact.job,
        contact.comp,
        contact.link,
        contact.meet,
        contact.msg
    ];

    const sql = `
        INSERT INTO contacts (fname, lname, email, job, comp, link, meet, msg)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await pool.execute(sql, params);
    

    res.render("confirm", { contact });
});
app.get("/admin", async (req, res) => {
    try {
        const [contacts] = await pool.query(
            "SELECT * FROM contacts ORDER BY created_at DESC"
        );

        res.render("admin", { contacts });

    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Error loading contacts: " + err.message);
    }
});
app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})