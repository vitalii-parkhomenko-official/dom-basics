/**
 * https://dummyjson.com/docs/products */
const config = {
  id: "Index",
  firstName: "First name",
  lastName: "Last name",
  maidenName: "Maiden name",
  age: "Age",
};
const columns = [
  "id",
  "firstName",
  "lastName",
  "maidenName",
  "age"
];

fetch("./users.json")
  .then(res => res.json())
  .then(data => {
    const element = document.querySelector("[data-table=\"users\"]");
    const table = renderTable(data.users, columns);

    element.append(table);

    function renderTable(data, columns) {
      const tableHead = renderHead([config], columns);
      const tableBody = renderBody(data, columns);
      const table = document.createElement("table");

      table.setAttribute("class", "table");
      table.append(tableHead);
      table.append(tableBody);

      return table;
    }

    function renderHead(data, columns) {
      const thead = document.createElement("thead");

      data.forEach(item => {
        const row = renderRow(item, columns, "th");

        thead.append(row);
      });

      // data.forEach(item => {
      //   const row = document.createElement("tr");
      //
      //   row.innerHTML = columns.reduce((html, column) => {
      //     return html + `<th>${item[column]}</th>\n`;
      //   }, "");
      //
      //   thead.append(row);
      // });

      return thead;
    }

    function renderBody(data, columns) {
      const tbody = document.createElement("tbody");

      data.forEach(item => {
        const row = renderRow(item, columns, "td");

        tbody.append(row);
      });

      // data.forEach(item => {
      //   const row = document.createElement("tr");
      //
      //   row.innerHTML = columns.reduce((html, column) => {
      //     return html + `<td>${item[column]}</td>\n`;
      //   }, "");
      //
      //   tbody.append(row);
      // });

      return tbody;
    }

    function renderRow(data, columns, cellTag) {
      const row = document.createElement("tr");

      columns.forEach(column => {
        const td = document.createElement(cellTag);

        td.textContent = data[column];

        row.append(td);
      });

      return row;
    }
  });
