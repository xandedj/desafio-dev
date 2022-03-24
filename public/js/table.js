
class Table {

  fields = [ 'company', 'amount', 'kind', 'owner', 'date' ];
  data = [];
  cpfs = [];
  balances = [];
  labels = [];
  values = [];

  observers = []

  constructor(data) {
    this.data = data;

    const rows = this.rows();
    const heads = this.heads();
    this.tbe(heads, rows)
  
  }

  refresh(data) {
    this.data = data;

    const rows = this.rows();
    const heads = this.heads();
    this.tbe(heads, rows)
  }

  tbe(heads, rows) {
    this.tb = `
    <table>
      <thead>${heads}</thead>
      <tbody>${rows}</tbody>
    </table>
  `
  return this.tb
  }

  columns(line) {
    let tds = "";
    this.fields.map((key)=> { tds += `<td>${line[key]}</td>`; })
    return tds;
  }

  rows() {
    let trs = "";
    this.data.map((line)=> { 
      this.cpfs[line.cpf]=line.company;

      trs += `<tr>${this.columns(line)}</tr>`; 
    });
    return trs;
  }

  heads(){
    let ths = "";
    this.fields.map((field)=> {
      ths += `<th>${field}</th>`
    })
    return `<tr>${ths}</tr>`;
  }

  print(id) {
    document.querySelector(id).innerHTML = this.tb;
  }

  filter(id) {

    const keys = Object.keys(this.cpfs)
    let options = `<option value="">Todos</option>`;
    keys.map((key)=> {
      options += `<option value="${key}">${this.cpfs[key]}</option>`;
    })

    const select = `<select id="select-table-filter">${options}</select>`;

    document.querySelector(id).innerHTML = select;
    document.querySelector("#select-table-filter").addEventListener('change', (event) => {
      this.observers.map((obs)=> { obs(event.target.value) });
    })

    return select;
  }

  async dash(id) {

    let ds = "";

    const keys = Object.keys(this.cpfs);
    for await (let key of keys) {
      let balance = await get(`http://localhost:5000/balance/${key}`);
      this.balances.push({ company: this.cpfs[key], balance });
      this.labels.push(this.cpfs[key]);
      this.values.push(balance);
      ds += `<div>${this.cpfs[key]} : <span>R$ ${balance}</span></div>`;
    };

    document.querySelector(id).innerHTML = ds;

    return ds;

  }
} 