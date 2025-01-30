// Criamos a classe de modelo das informações que serão recebidas pelo frontend
class ContatoModel {
  nome = null;        // string
  sobrenome = null;   // string
  email = null;       // string
  necessidades = [];  // string[]
  descricao = null;   // string
}

// Exportamos a classe pelo módulo para ser usada em outros arquivos
module.exports = {
  ContatoModel
}