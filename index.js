// selector

const btnOne = document.getElementsByClassName("btnOne")[0]
const inputOne = document.getElementsByClassName("inputOne")[0]
const todolist = document.getElementsByClassName("todolist")[0]
const optionDiv = document.getElementsByClassName("formTwo")[0]





// addEventListener

document.addEventListener("DOMContentLoaded",displayTodos)
btnOne.addEventListener("click",add);
todolist.addEventListener("click",scratch_del)
optionDiv.addEventListener("click",sort)









// function


// creating new element
function add(e){
    e.preventDefault()
    
    // creating div
    const div = document.createElement("div")
    div.classList.add("todolistdiv")
    todolist.appendChild(div)

    //creating list 
    const todoList = document.createElement("li")
    todoList.classList.add('todosVal')
    todoList.innerHTML = inputOne.value
    localstorage(inputOne.value)
    div.appendChild(todoList)

    // creating check btn
    const check = document.createElement("button")
    check.classList.add("checkbtn")
    check.innerHTML = '<i class = "fa fa-check"></i>'
    div.appendChild(check)

    // creating delete btn
    const deletebtn = document.createElement("button")
    deletebtn.classList.add("deletebtn")
    deletebtn.innerHTML = '<i class = "fa fa-trash"></i>'
    div.appendChild(deletebtn)

    inputOne.value = ""
}


// scratch and delete function
function scratch_del(e){
    let item = e.target

    // scratch on click of check btn
    if(item.classList[0] == "checkbtn"){
        item.parentElement.classList.toggle("completed")
    }
    // else if(item.classList[0] == "fa fa-check"){
    //     item.parentElement.parentElement.classList.toggle("completed")
    // }
    // 
    // or
    // 
    // .fa-check, .fa-trash{
    //     Pointer-events: none;
    // }


    // delete on click of delete btn
    if(item.classList[0] == "deletebtn"){
        dltlocalstorage(item.parentElement.children[0].innerHTML)
        item.parentElement.remove()
    }
}


// sort function
function sort(e){
    const options = todolist.childNodes;

    options.forEach((option)=>{
        switch (e.target.value) {
            case "all":
                option.style.display = "flex"
                break;

            case "completed":
                if(option.classList.contains("completed")){
                    option.style.display = "flex"
                }else{
                    option.style.display = "none"
                }
                break;

            case "uncompleted":
                if(!(option.classList.contains("completed"))){
                    option.style.display = "flex"
                }else{
                    option.style.display = "none"
                }
                break;

            default:
                break;
        }
    });

}


// local storage 
function localstorage(todo){
    let todos;
    if(localStorage.getItem("todos") == null){
        todos=[]
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(todos))
}


// display local storage content
function displayTodos(){
    todos = JSON.parse(localStorage.getItem("todos"))
    

    todos.forEach(todo => {

    // creating div
    const div = document.createElement("div")
    div.classList.add("todolistdiv")
    todolist.appendChild(div)

    //creating list 
    const todoList = document.createElement("li")
    todoList.classList.add('todosVal')
    todoList.innerHTML = todo
    div.appendChild(todoList)

    // creating check btn
    const check = document.createElement("button")
    check.classList.add("checkbtn")
    check.innerHTML = '<i class = "fa fa-check"></i>'
    div.appendChild(check)

    // creating delete btn
    const deletebtn = document.createElement("button")
    deletebtn.classList.add("deletebtn")
    deletebtn.innerHTML = '<i class = "fa fa-trash"></i>'
    div.appendChild(deletebtn)
    })
}


// deleting local storage value
function dltlocalstorage(todo){
    let todos = JSON.parse(localStorage.getItem("todos"))
    todos.splice(todos.indexOf(todo),1)
    localStorage.setItem("todos",JSON.stringify(todos))
}











