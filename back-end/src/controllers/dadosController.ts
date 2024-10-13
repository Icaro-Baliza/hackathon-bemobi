import { Request, Response } from 'express'
import Pagamentos from '../entities/Pagamentos';
import Cliente from '../entities/Cliente';
import Notificacoes from '../entities/Notificacoes';

class DadosController {
    static async receberDados(req: Request, res: Response) {
        try {
            const { id, genero, idade, estado, pagamentos, dataCancelamento, telefoneCliente, statusConversao } = req.body;

           
            const pagamentoObj = new Pagamentos(
                new Date(pagamentos.data), 
                pagamentos.statusPagamento
            );

           
            const clienteObj = new Cliente(
                id,
                genero,
                idade,
                estado,
                pagamentoObj,
                dataCancelamento ? new Date(dataCancelamento) : null
            );

            
            const notificacoesObj = new Notificacoes(
                telefoneCliente,
                statusConversao
            );

            
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

export default DadosController
