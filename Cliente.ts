export class Cliente{
    nome: string;
    telefone: string;
    cpf: string;


constructor(nome:string = "", telefone: string = "", cpf: string = "") {
    this.nome = nome;
    this.telefone = telefone;
    this.cpf = cpf;
}

criarCliente(nome: string, telefone: string, cpf: string): Cliente {
    const cliente: Cliente = new Cliente(nome);
    cliente.telefone = telefone;
    cliente.cpf = cpf;

    return cliente;
}
}