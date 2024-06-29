const inputbox = document.querySelector("#input-box");
const listcontainer = document.querySelector("#list-container");
const warning = document.querySelector("#warning");
const mess ="you have to write somthing.";

// if(inputbox.value === '' || inputbox.value === ' '){
//     // const mess ="you have to write somthing.";
//     // warning.append(mess);
//     // console.log(mess);
// }

function task(){
    if(inputbox.value === '' || inputbox.value === ' '){

        // if the warning message is written then it will not write again 
        if(warning.innerHTML === mess){
            return;
        }
        else{
            warning.append(mess);
        }
           
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        update();
    }
    inputbox.value = ''
    savedata();
}

// If you add the text and if the warning message is present on the screen then it will remove the warning message;
function update(li){
    warning.textContent = li;
}

//click function
listcontainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }

}, false);


function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showtask();