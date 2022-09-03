import estoqueLivros from "../controllers/estoqueLivros.js"

class Livro{

    // Variáveis e funções globais
    static proximoID = 1
    static all = []

    //Busca Livro
    static findById( id )
    {
        const livroEncontrado = livrosEstoque.all.find( lvr => lvr.id === id )
        
        if ( livroEncontrado !== undefined ) {
            return livroEncontrado
        } else {
            return null
        }
    }
}