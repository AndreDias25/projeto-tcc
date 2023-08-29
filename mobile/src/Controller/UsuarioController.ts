import Usuario from "../Model/Usuário";


class UsuarioController{
    static cadastrarUsuario(email: string, senha: string,nome_completo: string,cpf: string,data_nascimento: string,sexo: string, url_imagem_perfil: string) {
        const usuario = new Usuario(email, senha, nome_completo, cpf, data_nascimento, sexo, url_imagem_perfil);
        usuario.post(); // Chama diretamente o método post() do modelo User
    }
}

export default UsuarioController;