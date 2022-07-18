// Pokemon Lite


// Creating a Pokemon Constructor Function to Generate a new Pokemon


class Pokemon {

    constructor(pokemonName, health, magic) {
        this.pokemonName = pokemonName;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    }

    // Creating  new method to learn new skills and add them to the skills array

    learnAttackSkill(attack) {
        return this.skills.push(Object.values(attack));
    }

    //Creating a new method to attack another pokemon and arrange the results of attack for both pokemons

    attack(index, toWho) {

        if (this.health <= 0) {

            console.log(`${this.pokemonName} is already dead!`)

        } else if (toWho.health <= 0) {

            console.log(`${toWho.pokemonName} is already killed!! You cannot attack anymore!!`)

        } else if (this.magic >= this.skills[index][2]) { // since we always have the same order of attackskills(attackName, attackDamage, requiredMagic) because of the AttackSkill object we can use index numbers for the nested array

            this.magic = this.magic - this.skills[index][2];
            toWho.health = toWho.health - this.skills[index][1];
            console.log(`${this.pokemonName} launched skill '${this.skills[index][0]}' successfully.\n${toWho.pokemonName} got ${this.skills[index][1]} damage`)

            if (toWho.health <= 0) {
                setTimeout(function () { console.log(`You killed ${toWho.pokemonName}!`) }, 1000)
            }

        } else if (this.magic < this.skills[index][2]) {

            console.log('not enough magic, cannot launch attack!')
        }
    }

    // Creating a new method to show rest of pokemon's health and magic 
    showStatus() {

        if (this.health <= 0) console.log(`${this.pokemonName} is killed!`);

        if (this.health > 0) console.log(`${this.pokemonName} status \nhealth: ${this.health} \nmagic: ${this.magic}`)
    }

    // Creating a new method to add some more magic if needed
    getMagic() {
        this.magic += 20;
        console.log(`${this.pokemonName} got 20 more magic back`)
    }

}


// Creating a AttackSkill Constructor Function to Generate new attacks

class AttackSkill {

    constructor(attackName, attackDamage, requiredMagic) {
        this.attackName = attackName;
        this.attackDamage = attackDamage;
        this.requiredMagic = requiredMagic;
    }


}

// creating new pokemons with instances
let pikachu = new Pokemon("pikachu", 120, 80);
console.log(pikachu); // Pokemon { pokemonName: 'pikachu', health: 120, magic: 80, skills: [] }

let bulbasaur = new Pokemon("bulbasaur", 95, 105);
console.log(bulbasaur); // Pokemon { pokemonName: 'bulbasaur', health: 95, magic: 105, skills: [] }

console.log('----------');

// creating new attack skills
let lightning = new AttackSkill("lightning", 40, 30);
console.log(lightning); // AttackSkill { attackName: 'lightning', attackDamage: 40, requiredMagic: 30 }

let poisonSeed = new AttackSkill("poison seed", 20, 20);
console.log(poisonSeed); // AttackSkill { attackName: 'poison seed', attackDamage: 20, requiredMagic: 20 }

console.log('----------');

// teach new skills to pokemons
pikachu.learnAttackSkill(lightning);
console.log(pikachu); // // Pokemon { pokemonName: 'pikachu', health: 120, magic: 80, skills: [ [ 'lightning', 40, 30 ] ] }

bulbasaur.learnAttackSkill(poisonSeed);
console.log(bulbasaur); // Pokemon { pokemonName: 'bulbasaur', health: 95, magic: 105, skills: [ [ 'poison seed', 20, 20 ] ] }

console.log('----------')

// Let's PLay!
pikachu.attack(0, bulbasaur);
/* 
    pikachu launched skill 'lightning' successfully.
    bulbasaur got 40 damage
*/

bulbasaur.attack(0, pikachu);
/* 
    bulbasaur launched skill 'poison seed' successfully.
    pikachu got 20 damage
*/

console.log('----------');


pikachu.showStatus();
/* 
    pikachu status 
    health: 100 
    magic: 50
*/

bulbasaur.showStatus();
/* 
    bulbasaur status 
    health: 55 
    magic: 85
*/


console.log('----------');


pikachu.attack(0, bulbasaur);
/* 
    pikachu launched skill 'lightning' successfully.
    bulbasaur got 40 damage
*/

pikachu.attack(0, bulbasaur); // not enough magic, cannot launch attack!

// getting some more magic 
pikachu.getMagic(); // pikachu got 20 more magic back

pikachu.attack(0, bulbasaur);
/* 
    pikachu launched skill 'lightning' successfully.
    bulbasaur got 40 damage
    You killed bulbasaur!
*/

pikachu.showStatus();
/* 
    pikachu status 
    health: 100 
    magic: 10
*/

bulbasaur.showStatus(); // bulbasaur is killed!

bulbasaur.attack(0, pikachu); // bulbasaur is already dead!

pikachu.attack(0, bulbasaur); // bulbasaur is already killed!! You cannot attack anymore!!

