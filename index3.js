var arr = [];

function sevenRandomNumbers() {
  while (arr.length < 7) {
    var rnum = Math.floor(Math.random() * 10) + 1;
    arr.push(rnum);
  }
  console.log(arr);
}

sevenRandomNumbers();
