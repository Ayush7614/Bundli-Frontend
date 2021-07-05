function Timer() {
  /* Create a timer to count the elapsed time in minutes, seconds */

  this.count = function () {
    /* Update the counter value when called */

    let now = new Date();
    let diff = now.getTime() - this.time.getTime();

    let minutes = Math.floor(diff / 60000);
    let seconds = ((diff % 60000) / 1000).toFixed(0); // To have an integer in seconds

    this.counter = minutes + ":" + seconds;

    if (seconds === "60") {
      minutes += 1;
      this.counter = ("0" + minutes).slice(-2) + ":00";
    } else {
      this.counter = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    }
  };

  this.reset = function () {
    /* Set the counter to 00:00 manually */

    this.counter = "00:00";
  };

  this.start = function (startTime) {
    /* Set the timer start time and start counting */

    let self = this;
    this.time = startTime || new Date();

    this.timer = setInterval(function () {
      self.count();
    }, 1000);
  };

  this.stop = function () {
    /* Stops the counter by clearing the interval so the last value of this.counter remains */
    clearInterval(this.timer);
  };

  this.reset();
}
