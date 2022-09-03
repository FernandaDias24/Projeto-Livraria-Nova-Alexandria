import express from "express";
import estoqueLivros from './controllers/estoqueLivros.js';
const app = express();
const porta = process.env.PORT || 3000;
app.use(express.json());
estoqueLivros(app);

app.listen(porta, () => {
    console.log (`Servidor sendo executado em http://localhost:${porta}`)
})