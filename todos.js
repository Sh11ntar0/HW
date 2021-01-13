
let input = prompt('What would you like to do?');

//optional to add dummy data inside todos
const todos = ['Collect Chicken Eggs','Clean Litter Box'];

//start with a while loop that checks for quit input
while(input.toLowerCase() !== "quit"){
    //if else conditions
    if(input.toLowerCase() =="new"){
        let inputNew = prompt("OK, what is the new to do?");
        todos.push(inputNew);
        console.log(`${inputNew} added to the list!`);

    }
    else if(input.toLowerCase() =="list"){
        console.log(`******************`);
        for( let i = 0; i < todos.length; i++){
            console.log(`${i}:${todos[i]}`);
        }
        console.log(`******************`);
        

    }
    else if(input.toLowerCase() =="delete"){
        let inputDelete = prompt("OK, enter an index to delete:");
        todos.splice(inputDelete, 1);
        console.log(`Ok, delete ${inputDelete}`);

    }
    input = prompt('What would you like to do?');

}

console.log('OK QUIT THE APP');