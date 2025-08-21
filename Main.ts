import { Cliente } from "./Cliente";

// function criarCliente(nome: string, telefone: string, cpf: string): Cliente {
//    const cliente: Cliente = new Cliente(nome);
//    cliente.telefone = telefone;
//    cliente.cpf = cpf;
//
//    return cliente;
//}

const cliente: Cliente[] = []
cliente.push(criarCliente("Maria", "9876-5432", "987.654.321-00"));
cliente.push(criarCliente("João", "1234-5678", "123.456.789-00"));
cliente.push(criarCliente("Ana", "5555-5555", "111.222.333-44"));


// const cli: Cliente = criarCliente("João", "1234-5678", "123.456.789-00");

console.table(cli);
