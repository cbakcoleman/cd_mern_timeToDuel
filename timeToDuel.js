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
        target.printStats();
        console.log(`${this.name} attacks ${target.name} for - ${this.power} on Res: ${target.res}`);
        target.res -= this.power;
        target.printStats();
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
            if (this.stat == "res"){
                target.res += this.mag;
            } else if (this.stat ==  "power"){
                target.power += this.mag;
            }
            console.log(`${this.name} plays ${this.text} on ${target.name}.`);
            target.printStats();
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
redBeltNinja.printStats();

const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", +3);
hardAlgorithm.printStats();

hardAlgorithm.play(redBeltNinja);

const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
blackBeltNinja.printStats();

const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
unhandledPromiseRejection.printStats();

unhandledPromiseRejection.play(redBeltNinja);

const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2);
pairProgramming.printStats();

pairProgramming.play(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);
