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