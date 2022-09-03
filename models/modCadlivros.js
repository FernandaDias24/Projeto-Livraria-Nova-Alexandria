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

constructor( editora, titulo, autor, genero, ISBN )
{
    this.editora   = editora
    this.titulo    = titulo
    this.autor     = autor
    this.genero    = genero
    this.isbn      = ISBN
    this.id        = Livro.proximoID++
}

dados()
{
    return {
        "editora": this.editora,
        "titulo": this.titulo,
        "autor": this.autor,
        "genero": this.genero,
        "ISBN": this.ISBN,
    }
}
