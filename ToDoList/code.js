const form = document.forms["myForm"];
const input = form["task"]
const ul = document.getElementById("tasklist")
const taskadded = document.getElementById("p-of-num")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const val = input.value
    const newli = document.createElement("li")
    newli.innerHTML = "<i onclick=\"checkTask(this)\" class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>" + val + "<i onclick=\"deleteTask(this)\" class=\"fa fa-times\" aria-hidden=\"true\" style=\"float: right;\"></i>"
    ul.appendChild(newli)
    input.value = ""
    taskadded.innerHTML = "Task Added: " + document.getElementById('tasklist').getElementsByTagName('li').length + "<i onclick=\"deleteAll(this)\" class=\"fa fa-trash\" aria-hidden=\"true\" style=\"float: right;\"></i>"
})

function deleteTask(element){
    element.parentElement.remove()
    if(document.getElementById('tasklist').getElementsByTagName('li').length == 0){
        taskadded.innerHTML = ""
    }
    else{
        taskadded.innerHTML = "Task Added: " + document.getElementById('tasklist').getElementsByTagName('li').length + "<i onclick=\"deleteAll(this)\" class=\"fa fa-trash\" aria-hidden=\"true\" style=\"float: right;\"></i>"
    }
}
function checkTask(element){
    element.parentElement.style.textDecoration="line-through"
}
function deleteAll(element){
    ul.innerHTML = ""
    taskadded.innerHTML = ""
}

