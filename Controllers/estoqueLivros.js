import {livrosEstoque} from '../BancoDados/bancoDados.js';

function estoqueLivros (app){
    app.get('/', (req, res) => {
        res.status(200).send('Livraria Nova Alexandria');
    })
    app.get('/livrosEstoque', (req, res) =>{
        res.status(200).json(livrosEstoque)
    })
    app.get('/livrosEstoque/:id', (req, res) =>{
        let index = buscaLivro(req.params.id);
        res.json(livrosEstoque.livros[index]);
    })
    
    app.post('/livrosEstoque', (req, res) => {
        livrosEstoque.livros.push(req.body); // vai para algum metodo da model para criar cadastro 
        res.status(201).send('Livro cadastrado')
    })

    app.put('/livrosEstoque/:id', (req, res) =>{
        let index = buscaLivro(req.params.id);
        livrosEstoque.livros[index] = {...req.body};
        console.log (index)
        return res.status(201).send('Livro alterado.')

    } )

    app.delete('/livrosEstoque/:id', (req, res) =>{
        let {id} = req.params;
        let index = buscaLivro(id);
        livrosEstoque.livros.splice(index, 1);
        res.send(`Livro ${id} excluido.`);
    } )
}

//const novoLivro = new LIvrosEstoque(...req.body)

function buscaLivro(id){
    return livrosEstoque.livros.findIndex(livro => livro.id == id);
}

export default estoqueLivros