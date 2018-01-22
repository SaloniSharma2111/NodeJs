class PriceCalculator {
    constructor(pizzaSize, pizzaCrust, vegtopping, nonvegtopping, qnty) {
        this.pizzaSize = pizzaSize;
        this.pizzaCrust= pizzaCrust;
        this.vegtopping= vegtopping;
        this.nonvegtopping= nonvegtopping;
        this.qnty= qnty;
    }
    
    calculate() {
        var total= this.qnty*(this.pizzaSize + this.pizzaCrust + this.vegtopping + this.nonvegtopping);
        var totalWithTax= parseFloat(total) + parseFloat(0.125*total);
        return totalWithTax.toFixed(2);
    }
}

module.exports = PriceCalculator;