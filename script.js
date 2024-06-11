const input_box=document.getElementById("input-box");
const input_list=document.getElementById("list-container");

document.getElementById('add-button').addEventListener('click', addTask);
document.getElementById('input-box').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
function addTask(){
    if (input_box.value==''){
        alert("Let the activity be targeted")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        input_list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        }
    input_box.value = "";
    saveData();
}
input_list.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

function saveData(){
    localStorage.setItem("data",input_list.innerHTML)
}

function showTask(){
    input_list.innerHTML = localStorage("data");
}
showTask();