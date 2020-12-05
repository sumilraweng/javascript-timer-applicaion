export class Timer {
  constructor() {
    this.timer = null;
    this.minute = 0;
    this.hour = 0;
    this.second = 0;
  }

  //   ----------CreateMarkupMethod-----------
  timerMarkup() {
    if (this.second > 59) {
      this.second = 0;
      this.minute++;
    }

    if (this.minute > 59) {
      this.minute = 0;
      this.hour++;
    }
    if (this.hour > 24) {
      this.hour = 0;
    }
    document.getElementById("hours").innerHTML = String(this.hour).padStart(
      2,
      "0"
    );
    document.getElementById("minutes").innerHTML = String(this.minute).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").innerHTML = String(this.second).padStart(
      2,
      "0"
    );
  }
  //   ----------TimerMethod-----------
  start() {
    this.timer = setInterval(() => {
      this.timerMarkup();
      this.second++;
    }, 1000);
  }
  pause() {
    clearInterval(this.timer);
  }

  //   ----------RestartMethod-----------
  restart() {
    clearInterval(this.timer);
    this.timer = null;
    this.minute = 0;
    this.hour = 0;
    this.second = 0;
    this.timerMarkup();
  }
}
