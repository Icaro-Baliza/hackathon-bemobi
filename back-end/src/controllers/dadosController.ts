

class DadosController {
    static async receberDados(req: express.Request, res: express.Response) {
        try {
            const { id, genero, idade, estado, pagamentos, dataCancelamento, telefoneCliente, statusConversao } = req.body;

            // Criação do objeto Pagamentos
            const pagamentoObj = new Pagamentos(
                new Date(pagamentos.data), 
                pagamentos.statusPagamento
            );

            // Criação do objeto Cliente
            const clienteObj = new Cliente(
                id,
                genero,
                idade,
                estado,
                pagamentoObj,
                dataCancelamento ? new Date(dataCancelamento) : null
            );

            // Criação do objeto Notificacoes
            const notificacoesObj = new Notificacoes(
                telefoneCliente,
                statusConversao
            );

            // Simulação de uma ação assíncrona, como salvar no banco de dados
            // Por exemplo, await someService.saveData(clienteObj, notificacoesObj);

            res.status(200).json({
                message: "Dados recebidos com sucesso",
                cliente: clienteObj,
                notificacoes: notificacoesObj
            });
        } catch (error) {
            res.status(500).json({ message: "Erro ao processar os dados", error });
        }
    }
}
