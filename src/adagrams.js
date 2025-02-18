export const drawLetters = () => {
  // Implement this method for wave 1
    let lettersDrawn = [];
    const LETTER_POOL = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'];


    // if letter.count < letter.count {add letter to lettersDrawn}
    while (lettersDrawn.length < 10) {
      let letter = LETTER_POOL[Math.floor(Math.random()*LETTER_POOL.length)];
      let i = LETTER_POOL.indexOf(letter);
      if (letter !== undefined){
        lettersDrawn.push(letter);
      }
      delete LETTER_POOL[i];
    };
    return lettersDrawn
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let letter_frequency = [];
  for (let letter of lettersInHand){
    letter_frequency.push(letter);
  };
  for (let letter of input){
    if (letter_frequency.includes(letter)){
      let i = letter_frequency.indexOf(letter)
      delete letter_frequency[i];
    } else {
      return false;
    };
  };

  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;

  if (word === false){
    return score;
  }

  if (word.length >= 7) {
    score += 8;
  };
  for (let letter of word.toUpperCase()) {
    switch (letter) {
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
      case "L":
      case "N":
      case "R":
      case "S":
      case "T":
        score += 1
        break;
      case "D":
      case "G":
        score += 2
        break;
      case "B":
      case "C":
      case "M":
      case "P":
        score += 3
        break;
      case "F":
      case "H":
      case "V":
      case "W":
      case "Y":
        score += 4
        break;
      case "K":
        score += 5
        break;
      case "J":
      case "X":
        score += 8
        break;
      case "Q":
      case "Z":
        score += 10
        break;
    };
  };
  return score
};

export const highestScoreFrom = (words) => {
  let words_and_scores = [];
  let scores = [];
  let count_of_highscores = 0;

  for (let word of words){
    let score = scoreWord(word);
    scores.push(score);
    words_and_scores.push({word: word, score: score});
  }

  let max_score = Math.max(...scores);
  for (let score of scores){
    if (max_score === score) {
      count_of_highscores++;
    }
  }
  
  if (count_of_highscores === 1) {
    return words_and_scores[scores.indexOf(max_score)];
  };
  if (count_of_highscores === 2) {
    let first_index = scores.indexOf(max_score);
    let second_index = 1;
    let length_of_first_word = words_and_scores[first_index]['word'].length;
    let length_of_second_word = words_and_scores[1]['word'].length;
    
    if (length_of_first_word === length_of_second_word){
      return words_and_scores[first_index];
    };

    if (length_of_first_word !== 10 && length_of_second_word !== 10 && length_of_first_word > length_of_second_word){
      return words_and_scores[second_index];
    } else if (length_of_first_word !== 10 && length_of_second_word !== 10 && length_of_first_word < length_of_second_word){
      return words_and_scores[first_index];
    };

    if (length_of_first_word === 10) {
      return words_and_scores[first_index];
    } else {
      return words_and_scores[second_index];
    };
  };

};
