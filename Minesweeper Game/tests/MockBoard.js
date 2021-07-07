function setValue(board, zones, value) {
  for (let z = 0; z < zones.length; z++) {
    board.zones[zones[z]].value = value;
  }
}

function setMine(board, zones) {
  for (let z = 0; z < zones.length; z++) {
    board.zones[zones[z]].mine = true;
  }
}

MockBoard = function () {
  /* Creating a board to test the feature
  *  with 'x' as mines and 'o' as cases next to it and '.' are unveiled but with a value if 54 is clicked
  *  If clicked on 54, there should be most of the cases unveiled.
  *  Cases next to mines with value will be unveiled too.
  *
  *   o  o  .  3  .  o  o  7
  *   o  x  .  11 .  x  o  15
  *   .  .  .  19 .  .  o  o
  *   24 25 26 27 28 .  x  o
  *   32 33 .  .  .  .  .  .
  *   40 41 .  x  .  45 46 47
  *   48 49 .  .  .  53 54 55
  *   56 57 58 59 60 61 62 63
  *
  *
  * */
  let board = new Board(64, 0);
  let zoneWithMine = [9, 13, 30, 43];
  let zoneAtOne = [
    0, 1, 2, 4, 5, 6, 8, 10,
    12, 14, 16, 17, 18, 20,
    21, 29, 31, 34, 35, 36,
    37, 38, 39, 42, 44, 50, 51, 52];
  let zoneAtTwo = [21, 22];

  board.mineNumber = 4;
  setMine(board, zoneWithMine);
  setValue(board, zoneAtOne, 1);
  setValue(board, zoneAtTwo, 2);

  this.zones = board.zones;

  this.clicked = function (z, canvas) {
    board.clicked(z, canvas);
  };

};
