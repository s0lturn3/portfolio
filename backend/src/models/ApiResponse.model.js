// Criamos a classe de modelo das informações que serão recebidas pelo frontend
class ApiResponse {
  error = false;        // boolean
  errorMessage = null;  // string
  code = null;          // number
  body = null;          // any
  metadata = null;      // any
}

// Exportamos a classe pelo módulo para ser usada em outros arquivos
module.exports = {
  ApiResponse
}