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
    // var btn = document.createElement("button")
    td4.textContent = "completed";
    td4.style.color = "red";
    td4.style.cursor = "pointer";
    td4.addEventListener("click", function () {
        markComplateFunction(elem, index)
        td4.style.color = "green";
    })

    tr.append(td1, td2, td3, td5, td4);
    document.querySelector("#body").append(tr);

});

function markComplateFunction(elem, index) {
    event.preventDefault();
    completed.push(elem);
    // console.log(completed);
    localStorage.setItem("completedTodo", JSON.stringify(completed));
    //splice
}