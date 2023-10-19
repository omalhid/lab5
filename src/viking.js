// Soldier

/*  class
        should receive 2 arguments (health & strength)
        should receive the health property as its 1st argument
        should receive the strength property as its 2nd argument
    attack() method
        should be a declared
        should receive 0 arguments
        should return the strength property of the Soldier
    receiveDamage() method
        should be a declared
        should receive 1 argument (the damage)
        should remove the received damage from the health property
        shouldn't return anything
*/

class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack() { return this.strength
    };

    receiveDamage(damage) {
      this.health -= damage
    };
}

// Viking
/* should inherit from Soldier
    class
        should receive 3 arguments (name, health & strength)
        should receive the name property as its 1st argument
        should receive the health property as its 2nd argument
        should receive the strength property as its 3rd argument
    attack() method
        should be a declared
        should receive 0 arguments
        should return the strength property of the Viking
    receiveDamage() method
        should be a declared
        should receive 1 argument (the damage)
        should remove the received damage from the health property
        should return "NAME has received DAMAGE points of damage", if the Viking is still alive
        should return "NAME has died in act of combat", if the Viking dies
    battleCry() method
        should be a declared
        should receive 0 arguments
        should return Odin Owns You All!
 */

class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        super.receiveDamage(damage)
            if (this.health > 0){
                return `${this.name} has received ${damage} points of damage`;
            }else{
                return `${this.name} has died in act of combat`
            }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon

/* should inherit from Soldier
    class
        should receive the health property as its 1st argument
        should receive the strength property as its 2nd argument
    attack() method
        should be a declared
        should receive 0 arguments
        should return the strength property of the Saxon
    receiveDamage() method
        should be a declared
        should receive 1 argument (the damage)
        should remove the received damage from the health property
        should return "A Saxon has received DAMAGE points of damage", if the Saxon is still alive
        should return "A Saxon has died in combat", if the Saxon dies*/

class Saxon extends Soldier{

    receiveDamage(damage){
        super.receiveDamage(damage)
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }else {
            return `A Saxon has died in combat`
        }
    }

}

// War
class War {}
