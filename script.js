const resultButton = document.getElementById("result-button"); // 診断するボタンを取得しresultButtonという変数に
let scoreBaru = 0;
let scoreNalu = 0;
let scoreYuyu = 0;

resultButton.addEventListener("click", function () {
  const answerQ1 = document.querySelector('input[name = "q1"]:checked');
  // 診断するボタンが〇〇された時に処理実行する設定(クリック,function(外からの情報){処理の範囲});
  //querySelector指定方法('inputの中でも更にnameにq1がついている要素が選択されている時)
  const answerQ2 = document.querySelector('input[name = "q2"]:checked');
  const answerQ3 = document.querySelector('input[name = "q3"]:checked');
  const answerQ4 = document.querySelector('input[name = "q4"]:checked');
  const answerQ5 = document.querySelector('input[name = "q5"]:checked');
  const answerQ6 = document.querySelector('input[name = "q6"]:checked');
  const answerQ7 = document.querySelector('input[name = "q7"]:checked');

  const valueQ1 = answerQ1.value;
  // valueの値を取得する
  const valueQ2 = answerQ2.value;
  const valueQ3 = answerQ3.value;
  const valueQ4 = answerQ4.value;
  const valueQ5 = answerQ5.value;
  const valueQ6 = answerQ6.value;

  if (valueQ1 === "baru") {
    scoreBaru++;
  }
  if (valueQ1 === "nalu") {
    scoreNalu++;
  }
  if (valueQ1 === "yuyu") {
    scoreYuyu++;
  }

  if (valueQ2 === "baru") {
    scoreBaru++;
  }
  if (valueQ2 === "nalu") {
    scoreNalu++;
  }
  if (valueQ2 === "yuyu") {
    scoreYuyu++;
  }

  if (valueQ3 === "baru") {
    scoreBaru++;
  }
  if (valueQ3 === "nalu") {
    scoreNalu++;
  }
  if (valueQ3 === "yuyu") {
    scoreYuyu++;
  }

  if (valueQ4 === "baru") {
    scoreBaru++;
  }
  if (valueQ4 === "nalu") {
    scoreNalu++;
  }
  if (valueQ4 === "yuyu") {
    scoreYuyu++;
  }

  if (valueQ5 === "baru") {
    scoreBaru++;
  }
  if (valueQ5 === "nalu") {
    scoreNalu++;
  }
  if (valueQ5 === "yuyu") {
    scoreYuyu++;
  }

  if (valueQ6 === "baru") {
    scoreBaru++;
  }
  if (valueQ6 === "nalu-yuyu") {
    scoreNalu++;
    scoreYuyu++;
  }
});
