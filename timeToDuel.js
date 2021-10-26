class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

    printStats() {
        console.log("Name: " + this.name, ", Cost: " + this.cost);
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    printStats() {
        console.log("Name: " + this.name, ", Cost: " + this.cost, ", Power: " + this.power, ", Res: " + this.res);
    }

    attack(target) {
        //reduce target res by power
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }

    printStats() {
        console.log("Name: " + this.name, ", Cost: " + this.cost, ", Text: " + this.text, ", Stat: " + this.stat, ", Mag: " + this.mag);
    }

    play(target) {
        if (target instanceof Unit) {
            target.stat += target.mag;
            console.log("${this.name} plays ${this.text} on ${target.name}.")
        } else {
            throw new Error("Target must be a unit!")
        }
    }
}

const redBeltNinja = new Card("Red Belt Ninja", 3, 3, 4);
redBeltNinja.printStats();

const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's strength resilience by 3", "resilience", +3);
hardAlgorithm.printStats();

hardAlgorithm.play(redBeltNinja);
redBeltNinja.printStats();

const blackBeltNinja = new Card("Black Belt Ninja", 3, 3, 4);