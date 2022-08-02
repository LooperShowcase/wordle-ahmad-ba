const { request, response } = require("express");
const express = require("express");
const server = express();
const port = process.env.PORT || 3000;
const theAnswer = "shrek";
server.get("/guess/:word", (request, response) => {
  const userWord = request.params.word;
  const arr = [];
  for (let i = 0; i < userWord.length; i++) {
    const ch = userWord[i];
    if (ch == theAnswer[i]) {
      arr.push(1);
    } else if (theAnswer.includes(ch)) {
      arr.push(0);
    } else {
      arr.push(-1);
    }
  }
  response.json(arr);
});

server.use(express.static("public"));

server.listen(port, () => {
  console.log("lkaka is running on port 3000");
});
