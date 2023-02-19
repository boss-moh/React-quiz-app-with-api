export const fromat = (array = []) => {
  console.log(array, 'from fromat')
  const result = array.map(item => {
    return {
      correctAnswer: item.correctAnswer,
      options: shuffle([item.correctAnswer, ...item.incorrectAnswers]),
      title: item.question
    }
  }
  )
  return result
}

export default fromat


function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}