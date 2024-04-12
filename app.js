
function createChild(title, desc, id){
    const outerDiv = document.createElement("div");
    const innerDiv1 = document.createElement("div");
    const innerDiv2 = document.createElement("div");
    const buttonInDiv = document.createElement("button");
    const brTag = document.createElement("br");

    innerDiv1.innerHTML = title;
    innerDiv2.innerHTML = desc;
    buttonInDiv.innerHTML = "Mark as done";
    buttonInDiv.setAttribute("onclick", `markAsDone(${id})`);

    outerDiv.append(brTag);
    outerDiv.append(innerDiv1);
    outerDiv.append(innerDiv2);
    outerDiv.append(buttonInDiv);
    outerDiv.setAttribute("id", id);

    return outerDiv;
}

function updateDomAccToState(state){
    const parent = document.querySelector(".container");
    parent.innerHTML = "";
    for(let i = 0; i < state.length; i++){
        const child = createChild(state[i].title, state[i].description, state[i].id,);
        parent.appendChild(child);
    }
}
window.setInterval(async function(){
    const res = await fetch("https://sum-server.100xdevs.com/todos");
    const json = await res.json();
    updateDomAccToState(json.todos);
}, 5000)

















// let globalId = 1;

// function markAsDone(todoId){
//     const parent = document.getElementById(todoId);
//     parent.children[3].innerHTML = "Done!";
// }

// function createChild(title, desc, id){
//     const outerDiv = document.createElement("div");
//     const innerDiv1 = document.createElement("div");
//     const innerDiv2 = document.createElement("div");
//     const buttonInDiv = document.createElement("button");
//     const brTag = document.createElement("br");

//     innerDiv1.innerHTML = title;
//     innerDiv2.innerHTML = desc;
//     buttonInDiv.innerHTML = "Mark as done";
//     buttonInDiv.setAttribute("onclick", `markAsDone(${id})`);

//     outerDiv.append(brTag);
//     outerDiv.append(innerDiv1);
//     outerDiv.append(innerDiv2);
//     outerDiv.append(buttonInDiv);
//     outerDiv.setAttribute("id", id);

//     return outerDiv;
// }

// function addTodo(){
//     const title = document.querySelector("#title");
//     const desc = document.querySelector("#description");
//     const parent = document.querySelector(".container");

//     if(title.value !== "" && desc.value !== ""){
//         parent.appendChild(createChild(title.value, desc.value, globalId++));
//     }

//     title.value = "";
//     desc.value = "";

// }