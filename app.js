import express from "express";

const app = express();

const PORT=3000;

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.sendFile(`${import.meta.dirname}/views/index.html`)
})
app.get('/contact', (req,res)=>{
    res.sendFile(`${import.meta.dirname}/views/contact.html`)
})
app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})