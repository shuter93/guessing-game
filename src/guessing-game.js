class GuessingGame {
    constructor(min, max) {
        this.setRange(min, max)
    }
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    guess() {
        this.lastGuess = Math.round(((this.max - this.min) / 2) + this.min);
        return this.lastGuess;
    }
    lower() {
        this.setRange(this.min, this.lastGuess);
    }
    greater() {
        this.setRange(this.lastGuess, this.max);
    }
}

module.exports = GuessingGame;
