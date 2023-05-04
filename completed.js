var todoCompleted = JSON.parse(localStorage.getItem("completedTodo"));
console.log(todoCompleted);
// console.log("hello");

todoCompleted.map(function (elem) {
    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText = elem.itemName;

    var td2 = document.createElement("td")
    td2.innerText = elem.itemQty;

    var td3 = document.createElement("td")
    td3.innerText = elem.itemPriority;

    var td5 = document.createElement("td")
    td5.innerText = elem.itemDate;


tr.append(td1, td2, td3, td5);
    document.querySelector("#body").append(tr);

});