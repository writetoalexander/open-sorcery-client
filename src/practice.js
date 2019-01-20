/*
 * Complete the 'missingWords' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 */

const makeHistogram = (str) => {
  let words = str.split(' ');
  let hist = {};
  words.forEach((word) => {
    !hist[word] ? hist[word] = 1 : hist[word]++
  })
  //console.log('hist ', hist);
  return hist;
}

function missingWords(s, t) {
    // Write your code here
    let histS = makeHistogram(s);
    console.log('histS ', histS);

    let histT = makeHistogram(t);
    console.log('histT', histT);
    // let sWords = s.split(' ');
    // console.log('hist ', hist)
    // let results = [];
    // sWords.forEach((word) => {
    //   if (!hist[word]) {
    //     results.push(word)
    //   }
    // })
    //return results;
}

let output = missingWords('I am using HackerRank to improve programming and improve my skills', 'am HackerRank to improve');
console.log('output ', output);