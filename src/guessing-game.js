class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.ceil((this.max + this.min)/ 2)
    }

    lower() {
        return this.max = Math.ceil((this.max + this.min) /2)
    }

    greater() {
        return this.min = Math.ceil((this.max + this.min) /2)
    }
}

module.exports = GuessingGame;
// Бинарный поиск, один метод принимает границы, второй выдаёт число, и два крайних смещают минимальную
// и максимальную границу пока не получите нужное число