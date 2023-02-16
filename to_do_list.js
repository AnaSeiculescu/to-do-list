
// const btn = document.querySelector("button");

const lista = [{id: 1, value: "cireses", isChecked: true}, {id: 2, value: "meres", isChecked: false}];
let lastId = 2;

function getNextId() {
    lastId ++;
    return (lastId);
}

for (i = 0; i < lista.length; i++) {
    addToDoItem(lista[i].value, lista[i].isChecked, lista[i].id);
}

function addToDoItem(item, bifatBox, id) {
    const thing = defineThing(item, id);
    const box = defineCheckBox(bifatBox, id);
    const deleteBtn = addDeleteBox();
    const space = addSpace();
    insertElementsTogether(thing, box, space, deleteBtn);
    addDeleteItem(deleteBtn, id);
    console.log(thing);
    // addDecorText(bifatBox, id);
}

function defineThing(item, id) {
    const theThing = document.createElement("li");
    theThing.dataset.id = id;
    theThing.innerText = item;
    // theThing.innerText.style.font-family = 'Comic Sans MS';
    return theThing;
}



function defineCheckBox(bifatBox, id) {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = bifatBox;
    checkBox.dataset.id = id;
    checkBox.addEventListener("click", handleCheckboxClick);
    // addDecorText(bifatBox, id);
    return checkBox;
}

function handleCheckboxClick(event) {
    const checkboxInput = event.target;
    const isChecked = checkboxInput.checked;
    const id = checkboxInput.dataset.id;

    const li = document.querySelector(`li[data-id="${id}"]`);
    li.dataset.checked = isChecked;
    addDecorText(isChecked, id)
    // li.firstChild.addEventListener("click", decorOnClick);
}

function addSpace() {
    const space = document.createElement("span");
    space.textContent = " ";
    return space;
}

function addDeleteBox() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "del";
    return deleteBtn;
}

function insertElementsTogether(thing, box, space, deleteBtn) {
    thing.insertAdjacentElement('afterbegin', box);
    thing.insertAdjacentElement('beforeend', space);
    thing.insertAdjacentElement('beforeend', deleteBtn);
    document.getElementById("waitingList").appendChild(thing);
}

function addDeleteItem(deleteBtn, id) {
    deleteBtn.addEventListener("click", function() {
        const liToDelete = document.querySelector(`li[data-id="${id}"]`);
        console.log(liToDelete);
        liToDelete.remove();
    })
}

// function decorOnClick(event) {
    
    function addDecorText(isChecked, id) {
        const li = document.querySelector(`li[data-id="${id}"]`);
        // const decor = li.dataset.decoration;
        if (isChecked) {
            li.style.textDecoration = "line-through";
            // li.dataset.textDecoration = "line-through";
            // textToDecor.innerHTML.dataset.text-decoration-line == line-through;
            // thing.dataset.text-decoration == "line-through";
        } else {
            li.style.textDecoration = "none";
            // decor = "none";
        }
    }
// }

const btn = document.getElementById("add-btn");
let input = document.querySelector("#thing");
console.log(btn);

let backupText = input.placeholder;

btn.addEventListener("click", addTodoFromInput);

function addTodoFromInput() {
    let textulScrisDeAna = input.value.trim();
    let testRegEx = / +/g;
    
    if ((textulScrisDeAna.length !== 0)) {
        const nextId = getNextId();
        addToDoItem(textulScrisDeAna, false, nextId);
        lista.push(textulScrisDeAna);
        input.value = "";
        input.placeholder = backupText;
    } else {
        input.value = "";
        input.placeholder = "Please, add a task!";
    }
    console.log(lista);
}
// btn.addEventListener("click", function() {
//     let textulScrisDeAna = input.value;
    
//     if (input.value !== "") {
//         addToDoItem(textulScrisDeAna, false);
//         lista.push(textulScrisDeAna);
//         input.value = "";
//         input.placeholder = backupText;
//     } else {
//         input.placeholder = "Please, add a task!";
//     }
//     console.log(lista);
// });

// btn.addEventListener("click", addToDoItem(theThing, false))

input.addEventListener("keypress", function(event) {
   if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add-btn").click();
   }
});

// console.log(defineCheckBox(false));


