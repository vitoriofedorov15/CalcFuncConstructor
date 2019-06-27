function Calculator(x, y) {
    this.read = function() {
        this.x = +prompt('x', '');
        this.y = +prompt('y', '');
    };
    this.sum = function() {
        return this.x + this.y
    };
    this.sub = function() {
        return this.x - this.y
    };
    this.sub2 = function() {
        return this.y - this.x
    };
    this.mul = function() {
        return this.x*this.y
    };
    this.pow1 = function() {
        return this.x**this.y
    };
    this.pow2 = function() {
        return this.y**this.x
    };
}

let calc = new Calculator();
alert('Вас приветствует калькулятор. Введите два числа - x и y, и я покажу с ними все операции!')
calc.read();

alert('x + y: ' + calc.sum());
alert('x - y: ' + calc.sub());
alert('y - x: ' + calc.sub2());
alert('x * y: ' + calc.mul());
alert('x ^ y: ' + calc.pow1());
alert('y ^ x: ' + calc.pow2());