class Dessert {
    constructor(type, calories) {
    this.type = type;
    this.calories = calories;
    }
}

class IceCream extends Dessert {
    constructor(type, calories, flavor, scoops) {
    super (type, calories);
    this.flavor = flavor;
    this.scoops = scoops;
    } 
    includeSpoon() {
    console.log("Here is your spoon!");
}

vanillaIceCream
Ice Cream", 340, "Vanilla", and 3

console.log("vanillaIceCream")