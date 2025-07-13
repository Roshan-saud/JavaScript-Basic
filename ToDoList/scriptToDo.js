const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container-ul");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something before add!!!")
    }else{
     let li = document.createElement("li");
     li.innerHTML = inputBox.value;
     listContainer.appendChild(li); 
     inputBox.value = "";  //put inside else
     let span = document.createElement("span")
     span.innerHTML = "\u00d7";
     li.appendChild(span);
    } 
   saveData()
 }


 listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN")
        e.target.parentElement.remove();
        saveData()

        
        //to clear all
    },false);
    
    document.querySelector(".clear-btn").addEventListener("click", function () {
    listContainer.innerHTML = "";      // Clear all list items
    saveData();  
    })


 function saveData(){
    localStorage.setItem("Data-1", listContainer.innerHTML) 
 }

 function showList(){
    listContainer.innerHTML = localStorage.getItem("Data-1"); 
    console.log(listContainer.innerHTML); 
 }
 showList();