var allOutcomes = {"rockvsrock": -1, "rockvspaper": 0, "rockvsscissors": 1,
                   "papervsrock": 1, "papervspaper": -1, "papervsscissors": 0,
                    "scissorsvsrock": 0, "scissorsvspaper": 1, "scissorsvsscissors": -1};

module.exports = {
    userSelection : (userPick) => {
        var userChoice = "";
        switch (userPick){
            case 0: 
                userChoice = "rock";
            break;
            case 1:
                userChoice = "paper";
            break;
            case 2:
                userChoice = "scissors";
                break;
            default:
                console.log("something went wrong..");
            break;
        }
        return userChoice;
    },

    computerSelection : () =>{
        let value = Math.round(Math.random() * (2 - 0) + 0);
        let computerSelection = this.userSelection(value);
        return computerSelection;
    },

    results: (player1, player2) =>{
        let outcome = Object.keys(allOutcomes).filter((a, b) => {return (a == (player1.toLowerCase() + "vs" + player2.toLowerCase()))});
        let result = ""
        switch (allOutcomes[outcome]){
        case -1:
            result = "//**DRAW!**//";
            break;
        case 0:
            result = "//**Player 2 won!**//";
            break;
        case 1:
            result = "//**Player 1 won!**//";
            break;
        default:
            result = "Something went wrong...";
            break;
        }
        return result;
    }
/** -> testing logic
let player1 = "rOcK", player2 = "rOcK";
let outcome1 = Object.keys(allOutcomes).filter((a, b) => {return (a == (player1.toLowerCase() + "vs" + player2.toLowerCase()))
                                                        });
console.log(outcome1);
switch (outcome1){
  case -1:
     console.log("DRAW", outcome1);
    break;
  case 0:
    console.log("Player 2 won!", outcome1);
    break;
  case 1:
    console.log("Player 1 won!", outcome1);
    break;
  default:
    console.log("Something went wrong!");
    break;
}
 */
    
}