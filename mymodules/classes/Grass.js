let LivingCreature = require('./LivingCreature')
module.exports = class Grass extends LivingCreature {

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        console.log(emptyCells); 
        //var newCell = random(emptyCells);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;

            var newGrass = new Grass(newX, newY, this.id);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
}