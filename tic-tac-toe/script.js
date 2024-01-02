const BLANK = " ";
let table = [[BLANK, BLANK, BLANK], [BLANK, BLANK, BLANK], [BLANK, BLANK, BLANK]];
const players = ["X", "O"];
let user = String();

function ChoseFirst() {
    // Random choice between X and O
    user = Math.floor(2 * Math.random());
    showCurrentPlayer(players[user]);
}

function updatePlayer(user) {

    // Update marker for next move

    if (user == 0) {
        return 1;
    }

    else if (user == 1) {
        return 0;
    }
}

function showCurrentPlayer(player, won = false) {
    if (!won) {
        document.getElementById("DisplayPlayer").innerText = `${player} turn!`
    }
    else {
        document.getElementById("DisplayPlayer").innerText = `${player} won!`
    }
}

function isWinner(table, marker) {
    if (table[0][0] == marker && table[0][1] == marker && table[0][2] == marker) {
        return true;
    }
    else if (table[1][0] == marker && table[1][1] == marker && table[1][2] == marker) {
        return true;
    }
    else if (table[2][0] == marker && table[2][1] == marker && table[2][2] == marker) {
        return true;
    }
    else if (table[0][0] == marker && table[1][0] == marker && table[2][0] == marker) {
        return true;
    }
    else if (table[0][1] == marker && table[1][1] == marker && table[2][1] == marker) {
        return true;
    }
    else if (table[0][2] == marker && table[1][2] == marker && table[2][2] == marker) {
        return true;
    }
    else if (table[0][0] == marker && table[1][1] == marker && table[2][2] == marker) {
        return true;
    }
    else if (table[0][2] == marker && table[1][1] == marker && table[2][0] == marker) {
        return true;
    }
    else {
        return false;
    }
}

function isTableFull(table) {
    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            if (table[row][column] == BLANK) {
                return false;
            }
        }
    }
    return true;
}

function UserSelection(row, column) {

    // If space is available:
    if (table[row][column] == BLANK) {

        // Add value to table
        table[row][column] = players[user]

        // Update display
        document.getElementById(`R${row}C${column}`).innerText = table[row][column]

        // Verify if that completes the table
        if (isTableFull(table = table)) {
            window.location.reload()
        }

        // Verify if user won
        if (isWinner(table, players[user])) {
            showCurrentPlayer(players[user], won = true);
            window.location.reload();
        }

        // Update user to be next player
        user = updatePlayer(user)

    }

    // Show current player
    showCurrentPlayer(players[user]);
}