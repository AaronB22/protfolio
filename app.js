import express from "express";

const app = express();

const PORT=3007;
app.set("view engine", 'ejs');

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

const contacts=[]


app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/index.html`)
})
app.get('/contact', (req,res)=>{
    res.sendFile(`${import.meta.dirname}/views/contact.html`)
})
app.post('/confirm', (req, res) => {
    const contact={
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        job: req.body.job,
        comp: req.body.comp,
        link: req.body.link,
        meet: req.body.meet,
        msg: req.body.msg,
        timestamp: new Date()
    }
    contacts.push(contact)
    console.log(contact)
    res.render(`confirm`, {contact})
})
app.get('/admin', (req,res)=>{
    res.render('admin', {contacts})
})
app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})