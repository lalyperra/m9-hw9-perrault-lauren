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
        if(this.type === 'IceCream'){
    console.log("Here is your spoon!");
        }
    }  
}

const vanillaIceCream = new Dessert('Ice Cream', 340, 'Vanilla', 3);
console.log(vanillaIceCream);

vanillaIceCream.includeSpoon();