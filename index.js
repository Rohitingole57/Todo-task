document.querySelector("form").addEventListener("submit",myFunction);


// var todoArr = JSON.parse(localStorage.getItem("todoData"));
// if the todoData is null then the  todoArr is also empty/null
// if((localStorage.getItem("todoData"))==null){
//     todoArr=[];
// }
// else {
//     todoArr = JSON.parse(localStorage.getItem("todoData"));
// }

var todoArr = JSON.parse(localStorage.getItem("todoData")) || [];

function myFunction() {
    event.preventDefault();
    console.log("inside the function");
    var name = document.querySelector("#name").value;
    var qty = document.querySelector("#qty").value;
    var date = document.querySelector("#date").value;
    var priority = document.querySelector("#priority").value;
    // console.log(name,qty,priority);

    //Creating the object to store the values in the form of object
    var todoObj = {
        itemName : name,
        itemQty : qty,
        itemPriority : priority,
        itemDate: date
    };
    // console.log(todoObj);

    //pushing object into array to store the values in the form of array of object.
    todoArr.push(todoObj);
    // console.log(todoArr);

    //to store the entire todoArr into local storage
    localStorage.setItem("todoData",JSON.stringify(todoArr));
}
//bug 1: that whnever we hit submit then we refresh the page then the data is same . thats why we use JSON.parse to store in todoArr

























































// document.querySelector('form').addEventListener('submit',myFunction);

// // var todoArr;

// // if(localStorage.getItem("todoData")== null) {
// //     todoArr = [];
// // } else {
// //     todoArr = JSON.parse(localStorage.getItem("todoData"));
// // }

// var todoArr = JSON.parse(localStorage.getItem("todoData")) || [];

// //  console.log(todoArr)

// function myFunction() {
//     event.preventDefault()
//     console.log("inside function");
//     var name = document.querySelector("#name").value;
//     var qty = document.querySelector("#qty").value;
//     var priority = document.querySelector("#priority").value;
//     // console.log(name, qty, priority);
    
    // var todoObj = {
//         itemName: name,
//         itemQty: qty,
//         itemPriority: priority
//     };
    
//     todoArr.push(todoObj);
//     // console.log(todoArr);
//     localStorage.setItem("todoData",JSON.stringify(todoArr))
// }
// //Bugs
// //1.whenever page is refreshing array is empty. solution get some localstorage initially
// //2.when keey is not present -pushing into null will throw error