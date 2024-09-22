// console.log("Hello World!")


var task = document.querySelector("#task")
var array = []
var list = document.querySelector("#result-list")

function printloop(){
    for(var i = 0; i < array.length; i++){
        
        console.log(array[i],i)
        list.innerHTML += `<li>${array[i]}<button onclick="deleteTodo(${i})" class="btn"><i class="fa-solid fa-trash delete-icon"></i></button> <button onclick="editTodo(${i})" class="btn"><i class="fa-regular fa-pen-to-square edit-icon"></i></button></li>`

    //     // console.log(array)
    }
}

function todoTask(){
    // console.log(task.value)
    list.innerHTML = ""
    array.push(task.value)
    // console.log(array)

    task.value = ""
    
    printloop()

}


function deleteTodo(index){
    list.innerHTML = ""
    array.splice(index , 1)
    // console.log(array)
     

   printloop()
        
    
    task.value = ""
}

function editTodo(index){

    var userEdit = prompt("Enter to Edit Task")
    list.innerHTML = ""
    array.splice(index , 1 ,userEdit )
    
    
   printloop()
}