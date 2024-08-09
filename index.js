// this select a choice between rock, paper and scissors
function randomChoice() {
    /* generate number between 1 and 9 */
      let range = Math.floor(Math.random() * 9 + 1)
    
    /* divide the 1 to 9 range into 3 equal zones and return different values depending on the zone the random number falls into	 */
      if (range <= 3) {
        return 'Rock'
      } else if (range === 4 || range === 5 || range === 6) {
        return 'Paper'
      } else if (range === 7 || range === 8 || range === 9) {
        return 'Scissors'
      }
    }

// this decides which choice wins the round
function judge(humanChoice, cpuChoice) {
        if (humanChoice === 'Rock' && cpuChoice === 'Rock') {
            return 'Tie'
        } else if (humanChoice === 'Rock' && cpuChoice === 'Paper') {
            return 'You lose'
        } else if (humanChoice === 'Rock' && cpuChoice === 'Scissors') {
            return 'You win'
        } else if (humanChoice === 'Paper' && cpuChoice === 'Rock') {
            return 'You win'
        } else if (humanChoice === 'Paper' && cpuChoice === 'Paper') {
            return 'Tie'
        } else if (humanChoice === 'Paper' && cpuChoice === 'Scissors') {
            return 'You lose'
        } else if (humanChoice === 'Scissors' && cpuChoice === 'Rock') {
            return 'You lose'
        } else if (humanChoice === 'Scissors' && cpuChoice === 'Paper') {
            return 'You win'
        } else if (humanChoice === 'Scissors' && cpuChoice === 'Scissors') {
            return 'Tie'
        }
    }

// this keeps track of the scores
function scoreKeeper() {
    if (decision === 'You win') {
    humanScore += 1
    } else if (decision === 'You lose') {
    cpuScore += 1
    }
}

let decision = judge(humanChoice, cpuChoice)
let humanScore = 0
let cpuScore = 0

