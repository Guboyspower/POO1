import { Cliente } from "./Cliente";

const cli: Cliente = new Cliente("Gustavo");
cli.telefone = "55912312312";
cli.cpf = "12312312312";
console.table(cli);