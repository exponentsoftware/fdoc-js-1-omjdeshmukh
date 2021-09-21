// 1

function countWords(str, word1, word2) {
  let a = str.split(" ");
  console.log(a.length);

  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < a.length; i++) {
    if (word1 === a[i]) {
      count1++;
    }
    if (word2 === a[i]) {
      count2++;
    }
  }

  console.log(word2)
  console.log(word1)

  console.log(count1);
  console.log(count2);

  if (count1 > count2) {
    console.log(`The word ${word1} more frequently occurred than ${word2}.`);
  } else if (count1 < count2) {
    console.log`The word ${word2} more frequently occurred than ${word1}.`();
  } else {
    console.log(` The occurred of word ${word1} and ${word2} is same`);
  }
}

const paragraph =
  "I love teaching. If you do not love teaching what else can you love . I love JavaScript if you do not love something which can give life to your application what else can you love .";

console.log(countWords(paragraph, "love", "you"));
// The word love more frequently occurred than you.
