const pad = 2; //Value for the padding
const size = 30; //Value for the size of a zone (a square)

function autoSize(n) {
  /* Calculate the number of padding and zoneSize that can fit in n, without missing the first padding */
  return (n - pad) / (size + pad);
}

function removeFromArray(value, array) {
  /* Return a new array without all of the occurrences of the specified value */
  let results = [];

  for (let i = 0; i < array.length; i++) {
    // Coord with this.boardsize as value are not available and are removed
    if (array[i] !== value) {
      results.push(array[i]);
    }
  }

  return results;
}

function setMineNumber(x, defaultValue) {
  try {
    try {
      if (typeof (x) === "string") throw new TypeError("Should be a number");
      if (isNaN(x)) throw {
        name: "Empty input",
        level: "Warning",
        message: "Default value will be applied",
      };
    } catch (e) {
      console.log("Warning: " + e.name + ". " + e.message);
      x = defaultValue;
    }
    if (x === 0) throw "Warninrg, input is 0";
  } catch (e) {
    console.log("%c " + e + ", the amount of mines should be greater than 0", "color: orange");
  }

  return x;
}

function Board(map, mineNumber) {
  /*
          Board accept two letiables, map which defines how the board is created,
          If you feed Board with a canvas, it will fill it with cases,
          If you feed Board with a number, it will create a square of zones starting top left
          A board is composed of multiple independent square zones
          example:

                           North

                  -------- board --------
                   0  1  2  3  4  5  6  7
                   8  9 10 11 12 13 14 15
                  16 17 18 19 20 21 22 23
          West    24 25 26 27 28 29 30 31     East
                  32 33 34 35 36 37 38 39
                  40 41 42 43 44 45 46 47
                  48 49 50 51 52 53 54 55
                  56 57 58 59 60 61 62 63

                          South

          64 - boardSize
          8  - column

           -- zoneSize
           __                 __   __
          |  | <- Padding -> |  | |  |
           --                 --   --
  */

  this.column = Math.round(Math.sqrt(map)) || Math.floor((autoSize(map.width)));
  this.row = Math.round(Math.sqrt(map)) || Math.floor((autoSize(map.height)));
  this.padding = pad;
  this.zoneSize = size;
  this.boardSize = this.column * this.row;
  this.numberNotUnveiled = this.boardSize;
  this.mineNumber = setMineNumber(mineNumber, this.column);
  this.zones = [];
  this.mines = [];
  this.values = Array.apply(null, new Array(this.boardSize)).map(Number.prototype.valueOf, 0); // Array of zeros

  this.autoFit = function (n) {
    /* Try to reduce the amount of unused space in an inconvenient Canvas */
    let x, y;

    //Detect the space to small to be filled with zone
    x = n.width - this.column * (this.zoneSize + this.padding) - this.padding;
    y = n.height - this.row * (this.zoneSize + this.padding) - this.padding;

    //Divides the amount left by number of padding
    x = x / (this.column + 1);
    y = y / (this.row + 1);

    //Adjust the padding depending on which side is bigger (height or width)
    if (x > y) {
      this.padding = Math.round(this.padding + y);
    } else {
      this.padding = Math.round(this.padding + x);
    }
  };

  this.hasMine = function (n) {
    /* Check if an integer n is a zone where there's a mine */
    return this.mines.indexOf(n) > -1;
  };

  this.north = function (z) {
    /* Return the zone north to the "z" one unless we're at the top row */
    if ((0 <= z && z < this.column) || z === this.boardSize) {
      return this.boardSize;
    } else {
      return z - this.column;
    }
  };

  this.south = function (z) {
    /* Return the zone south to the "z" one unless we're at the bottom row */
    if ((this.boardSize - this.column <= z && z < this.boardSize) || z === this.boardSize) {
      return this.boardSize;
    } else {
      return z + this.column;
    }
  };

  this.east = function (z) {
    /* Return the zone east to the "z" one unless we're at the eastern row */
    if ((z % this.column === this.column - 1) || z === this.boardSize) {
      return this.boardSize;
    } else {
      return z + 1;
    }
  };

  this.west = function (z) {
    /* Return the zone west to the "z" one unless we're at the western row */
    if ((z % this.column === 0) || z === this.boardSize) {
      return this.boardSize;
    } else {
      return z - 1;
    }
  };

  this.neighbour = function (z) {
    /* Return an array with all available surrounding zones of the *z* input one */
    let neighbours = [
      this.north(z),
      this.north(this.east(z)),
      this.north(this.west(z)),
      this.south(z),
      this.south(this.east(z)),
      this.south(this.west(z)),
      this.east(z),
      this.west(z)
    ];

    // Coord with this.boardsize as value are not available and are removed
    return removeFromArray(this.boardSize, neighbours);

  };

  this.setMines = function () {
    /* Create the mines array */

    while (this.mines.length < this.mineNumber) {
      let n = Math.ceil(Math.random() * (this.boardSize - 1));

      if (!this.hasMine(n)) {
        this.mines.push(n);
      }
    }

    // Have the mines in the right order (not mandatory)
    this.mines.sort(function (a, b) {
      return a - b;
    });
  };

  this.setValues = function () {
    /* Generates this.values[] which stores the number that says how many mines are around */
    let coord, i, j;

    for (i = 0; i <= this.mines.length; i++) {
      //Increment the value for all surrounding zones
      coord = this.neighbour(this.mines[i]);

      for (j = 0; j < coord.length; j++) {
        this.values[coord[j]] += 1;
      }

    }
  };

  this.addZone = function () {
    /* Create a zone and add it to the board */
    let mine = false;
    let value = this.values[this.zones.length];
    let x = (this.zoneSize + this.padding) * (this.zones.length % this.column) + this.padding;
    let y = (this.zoneSize + this.padding) * Math.floor(this.zones.length / this.column) + this.padding;

    //When using addZones, the length of the zones moves from 0 to this.boardSize
    if (this.hasMine(this.zones.length)) {
      mine = true;
    }

    this.zones.push(new Zone(x, y, mine, this.zoneSize, value));
  };


  this.setZone = function () {
    /* Initialise board values and create the zones */

    // Add the mines
    this.setMines();

    // Add all the values, the number that say how mines are around
    this.setValues();

    // Create all the zones
    while (this.zones.length < this.boardSize) {
      this.addZone();
    }

  };

  this.update = function (x, y, evt, canvas) {
    /* Action to perform based on event received and the coordinates of the mouse */
    let z = this.getZone(x, y);

    if (this.zones[z]) {
      switch (evt) {
        case "click":
          this.clicked(z, canvas);
          break;
        case "contextmenu":
          this.zones[z].switchFlag();
          break;
        case "mousemove":
          //this.zones[z].hover();
          break;
        default:
        //console.log("Unusual behaviour: " + evt);
      }
      this.draw(canvas);
    }
  };

  this.explode = function (zone, canvas) {
    /* Dispatch custom event "explode" */
    let explode = new CustomEvent("explode", {
      "detail": {
        "x": zone.x,
        "y": zone.y
      }
    });
    canvas.dispatchEvent(explode);
  };

  this.alertStatus = function (canvas, type) {
    let status = new CustomEvent(type);
    canvas.dispatchEvent(status);
  };


  this.gameOver = function (z, canvas) {
    /* Unveil all the mines of the board */

    for (let i = 0; i < this.mines.length; i++) {
      this.zones[this.mines[i]].unveil();
    }

    this.explode(this.zones[z], canvas);
    this.alertStatus(canvas, "lose");
  };

  this.checkWin = function (canvas) {
    if (this.mineNumber === this.numberNotUnveiled) {
      this.alertStatus(canvas, "win");
    }
  };

  this.unveil = function (z) {
    /* A zone can be unveiled if there's no flag, and it's not already unveiled */
    if (!this.zones[z].flag && !this.zones[z].isUnveiled) {
      this.zones[z].unveil();
      this.numberNotUnveiled--;
      return true;
    } else {
      return false;
    }
  };

  this.expand = function (z) {
    let coord, j;

    //Unveil the zone, if it fits the requirement, we continue with the possible neighbours
    if (this.unveil(z)) {
      if (!this.zones[z].value) {
        coord = this.neighbour(z);

        for (j = 0; j < coord.length; j++) {
          if (!this.zones[coord[j]].isUnveiled) {
            this.expand(coord[j]);
          }

        }
      }
    }
  };

  this.clicked = function (z, canvas) {
    /* Define how the board reacts when it's clicked, with z being the clicked zone */

    this.expand(z);

    if (this.zones[z].hasMine()) {
      this.gameOver(z, canvas);
    } else {
      this.checkWin(canvas);

    }
    //*/
  };

  this.draw = function (canvas) {
    /* Drawing the state of the board */
    let ctx = canvas.getContext("2d");

    //Clean up the board
    ctx.fillStyle = "#FFF";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    //The board will ask each zone to draw itself
    for (let i = 0; i < this.zones.length; i++) {
      this.zones[i].draw(canvas);
    }
  };

  this.getZone = function (x, y) {
    /* Give the zone number of a given position (x, y) */
    let column, row;
    let zone = null;

    if (x <= (this.zoneSize + this.padding) * this.column && y <= (this.zoneSize + this.padding) * this.column) {
      column = Math.floor(x / (this.zoneSize + this.padding));
      row = Math.floor(y / (this.zoneSize + this.padding));
      zone = row * this.column + column;
    }

    return zone;
  };

  // So that the board is initialised when created with inconvenient canvas to fit it
  if (!Number.isInteger(map)) {
    this.autoFit(map);
  }
  this.setZone();

}
