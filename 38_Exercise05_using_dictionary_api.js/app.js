console.log("Using a dictionary api exercise 5");

let addDefination = document.getElementById("addDefination");
addDefination.addEventListener("click", defHandler);

function defHandler(){
    console.log("Check: you clicked the list handler.");

    // initiate an xhr object
    const xhr = new XMLHttpRequest();

    //open 
    xhr.open("GET", "myJson.json", true);

    //progress
    xhr.onprogress = function(){
        console.log("onProgress");
    }

    //on ready state change
    xhr.onreadystatechange = function (){
        console.log("ready state is: ", xhr.readyState);
    }

    //on load
    xhr.onload = function(){
        // console.log(this.responseText);
        let obj = JSON.parse(this.responseText);
        // console.log(obj);

        let obj_Result = obj.results;
        let html = "";
        for(key in obj_Result){
                html+=`<li>${obj_Result[key].definition}</li>`;
        }

        let list = document.getElementById("list");
        list.innerHTML = `<h3>The value of all Definition are:-</h3>${html}`;
          
    }

    //send
    xhr.send()
}