import { statusPagamento } from "../enums/statusPagamento";

class Pagamentos {
   data: Date
   statusPagamento: statusPagamento

   constructor(data: Date, statusPagamento: statusPagamento) {
      this.data = data;
      this.statusPagamento = statusPagamento;
   }
}

export default Pagamentos
