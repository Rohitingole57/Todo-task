var todoItems = JSON.parse(localStorage.getItem("todoData"));
// console.log(todoItems);
// var completed = []; 

var completed = JSON.parse(localStorage.getItem("completedTodo")) || [];

todoItems.map(function (elem, index) {
    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText = elem.itemName;

    var td2 = document.createElement("td")
    td2.innerText = elem.itemQty;

    var td3 = document.createElement("td")
    td3.innerText = elem.itemPriority;

    var td5 = document.createElement("td")
    td5.innerText = elem.itemDate;


    var td4 = document.createElement("td")
    td4.textContent = "completed";
    td4.style.color = "red";
    td4.style.cursor = "pointer";
    td4.addEventListener("click", function () {
        markComplateFunction(elem, index)
        td4.style.color = "green";
    })

    var btn = document.createElement("button")
    btn.innerText = "Delete"
    btn.style.alignItems = "center";
    btn.style.margin = "20px"
    btn.style.padding = "6px"
    btn.style.color = "white";
    btn.style.cursor = "pointer";
    btn.style.border = "none";
    btn.style.backgroundColor = "red";
    btn.addEventListener("click", function () {
        removeItem(elem, index)
    })

    tr.append(td1, td2, td3, td5, td4, btn);

    document.querySelector("#body").append(tr);
});

function removeItem(elem, index) {
    todoItems.splice(index, 1)
    localStorage.setItem("todoData", JSON.stringify(todoItems))
    window.location.reload();
}

function markComplateFunction(elem) {
    event.preventDefault();
    completed.push(elem);
    localStorage.setItem("completedTodo", JSON.stringify(completed));
}