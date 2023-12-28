let table = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
let players = ["X", "O"];
let user = String();

function ChoseFirst(){
    // Random choice between X and O
    user = Math.floor(2 * Math.random());
    console.log(user)
}

function UserSelection(row, column){
    
    // Add selection user to table
    if (table[row][column] == " "){
        table[row][column] = players[user]
    }
    
    // Update marker for next move
    if (user == 0){
        user = 1
    }
    else if (user == 1){
        user = 0
    }

    // Update display
    document.getElementById(`R${row}C${column}`).innerText = table[row][column]
    
}
