const fs = require('fs');

class Cnab {

  file = "";
  path = "";
  lines = []
  cashin = "CASHIN";
  cashout = "CASHOUT";
  total = 0;
  contents = [];

  transactions = [];
  constructor(path) {

    if(!!path) {
      this.transaction(1, "Débito", this.cashin);
      this.transaction(2, "Boleto", this.cashout);
      this.transaction(3, "Financiamento", this.cashout);
      this.transaction(4, "Crédito", this.cashin);
      this.transaction(5, "Recebimento Empréstimo", this.cashin);
      this.transaction(6, "Vendas", this.cashin);
      this.transaction(7, "Recebimento TED", this.cashin);
      this.transaction(8, "Recebimento DOC", this.cashin);
      this.transaction(9, "Boleto", this.cashout);

      this.path = path;
    }

  }

  transaction(index, description, kind) {
    this.transactions[index]= { description, kind, type: index };
  }

  async load() {
    if(!!this.path) {
      this.file = await fs.readFileSync(this.path, { encoding: 'utf8', flag: 'r' } ) || "";
      this.lines = this.file.split('\n') || [];
      this.total = this.lines.length;
    }

    await this.factory();
    return this.contents;
  }

  async factory() {
    this.lines.forEach((line)=>{
      if(!!line) {
        const transaction = this.transactions[line.substring(0, 1)];
        const cnab = { };
        cnab.type = transaction.type;
        cnab.kind = transaction.kind
        cnab.amount = this.parseAmount(line.substring(9, 19));
        cnab.description = transaction.description;
        cnab.date = this.parseDate(line.substring(1, 9));
        cnab.datetime = this.parseHour(cnab.date, line.substring(42, 48));
        cnab.cpf = line.substring(19, 30);
        cnab.card = line.substring(30, 42);
        cnab.owner = line.substring(48, 62).trim();
        cnab.company = line.substring(62, 81).trim();

        this.contents.push(cnab);
      }
    })
  }

  parseDate(date) {
    const year = date.substring(0, 4);
    const month = date.substring(4, 6)
    const day = date.substring(6,8)
    return `${year}-${month}-${day}`;
  }

  parseAmount(amount) {
    return Number(parseInt(amount, 10)) || 0
  }

  parseHour(date, time) {
    const hour = time.substring(0, 2);
    const min = time.substring(2, 4);
    const seg = time.substring(4, 6);
    return new Date(`${date}T${hour}:${min}:${seg}`);
  }

} 

module.exports = Cnab;