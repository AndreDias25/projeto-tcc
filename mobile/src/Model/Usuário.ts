import supabase from "./services/supabase";

class Usuario{
    Email: string;
    Senha: string;
    Nome_Completo: string;
    CPF: string;
    Data_Nascimento: Date;
    Sexo: string;
    Url_Imagem_Perfil?: string;

    constructor(Email: string, Senha: string, Nome_Completo: string, CPF: string, Data_Nascimento: string, Sexo: string, Url_Imagem_Perfil: string){
        this.Email = Email;
        this.Senha = Senha;
        this.Nome_Completo = Nome_Completo;
        this.CPF = CPF;
        this.Data_Nascimento = new Date(Data_Nascimento);
        this.Sexo = Sexo;
        this.Url_Imagem_Perfil = Url_Imagem_Perfil;
    }

    get(){
    }

    post(){
    }

    put(){}

    patch(){}

    delete(){}
}

export default Usuario;