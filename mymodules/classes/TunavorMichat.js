let LivingCreature = require('./LivingCreature')
module.exports = class TunavorMichat extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mul() {
        var emptyCells = this.chooseCell(0);

        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.energy >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;

            var newTunavorMichat = new TunavorMichat(newX, newY, this.id);
            tunavorMichatArr.push(newTunavorMichat);
            this.energy = 8;
        }
    }
    move() {
        var emptyCells = this.chooseCell(0);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            this.energy--;
        }
        this.die();
    }
    eat() {
        var emptyCellsTunavorMichat = this.chooseCell(4);
        var emptyCells = emptyCellsTunavorMichat
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            this.energy++;

            for (var i in hzorgisatichArr) {
                if (newX == hzorgisatichArr[i].x && newY == hzorgisatichArr[i].y) {
                    hzorgisatichArr.splice(i, 1);
                    break;
                }
            }

            this.mul();
        } else {
            this.move();
        }
    }
    die() {
        if (this.energy <= 0) {
            for (var i in tunavorMichatArr) {
                if (this.x == tunavorMichatArr[i].x && this.y == tunavorMichatArr[i].y) {
                    tunavorMichatArr.splice(i, 1);
                    break;
                }
            }

            matrix[this.y][this.x] = 0
        }
    }
    // die() {
    //     if (this.energy <= 0) {
    //         for (var i in hzorgisatichArr) {
    //             if (this.x == hzorgisatichArr[i].x && this.y == hzorgisatichArr[i].y) {
    //                 hzorgisatichArr.splice(i, 1);
    //                 break;
    //             }
    //         }

    //         matrix[this.y][this.x] = 0
    //     }
    // }
}