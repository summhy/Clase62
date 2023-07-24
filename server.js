import express from "express";
import hbs from "hbs";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set("view engine", "hbs");
hbs.registerPartials(__dirname+"/views/partials");

app.get("/", (req, res)=>{
    res.send("Hola Mundo");
})

app.get("/index", (req, res)=>{
    res.render("index");
})

app.get("/pagina2", (req, res)=>{
    res.render("pagina2");
})

app.get("/division/:num1/:num2", (req, res)=>{
    try{
        const num1=parseInt(req.params.num1) || 0;
        const num2=parseInt(req.params.num2) || 0;
        let resultado = num1/num2;

        res.send(resultado.toString());
    }catch(error){
        res.sendStatus(`El error es ${error}`);
    }
    
})


app.listen(3001,()=>{console.log("Levantado puerto 3001")});