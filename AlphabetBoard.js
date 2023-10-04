/**
 * @param {string} target
 * @return {string}
 */

//medium level
const boardData = (board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"]);
var alphabetBoardPath = function (target, board = boardData) {
  // console.table([boardData])
  for (let i = 0; i < boardData.length; i++) {
    for (let j = 0; j < boardData[i].length; j++) {
      console.log(boardData[i][j]);
    }
  }

  // for(let i of board){
  //     console.log(first)
  // }
};

alphabetBoardPath("leet");
