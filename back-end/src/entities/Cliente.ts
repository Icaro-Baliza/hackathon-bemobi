class Cliente {
    id: number
    genero: genero
    idade: number
    estado: string
    pagamentos: Pagamentos
    dataCancelamento: Date | null

    constructor(
        id: number,
        genero: genero,
        idade: number,
        estado: string,
        pagamentos: Pagamentos,
        dataCancelamento: Date | null
      ) {
        this.id = id;
        this.genero = genero;
        this.idade = idade;
        this.estado = estado;
        this.pagamentos = pagamentos;
        this.dataCancelamento = dataCancelamento;
      }

}



