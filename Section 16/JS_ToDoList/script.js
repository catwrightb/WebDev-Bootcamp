let list = [];

console.log("TO DO LIST APP")


while(true){
    let input = prompt("Please enter action");

    let listLength = list.length;

    if(input === 'new'){
        input = prompt("Please enter new todo item");

        list.push(input);

    }
    else if(input === 'list'){
        if(listLength <= 0){
            console.log("**************")
            console.log("No to do items")
            console.log("**************")
        }
        else if(listLength > 0 ){
            console.log("**************")
            for (const items in list) {
                console.log(`${items} : ${list[items]}`)
            }
            console.log("**************") 
        }
        
    }
    else if(input === 'delete'){

        if(listLength <= 0){
            console.log("No items to delete")
            
        }
        else if(listLength > 0 ){
            input = prompt("Please enter number of todo to delete");

            if(input > listLength){
                input = prompt("Not a valid list item hit enter again");
            }
            else{
                list.splice(input, 1);
            }

        }

    }
    else if(input === 'quit'){
        console.log("Quit App");
        break;
    }

}