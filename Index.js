function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
      const product = num * i;
      console.log(`${num} x ${i} = ${product}`);
    }
  }

  const form = document.querySelector("form");
  const tableDiv = document.getElementById("table");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const num = parseInt(form.num.value);
    tableDiv.innerHTML = "";
    multiplicationTable(num);
  });