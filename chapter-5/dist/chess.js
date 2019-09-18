"use strict";
console.log("chess");
class Piece {
    constructor(color, file, rank) {
        this.color = color;
        this.position = new Position(file, rank);
    }
    moveTo(position) {
        this.position = position;
    }
}
// new Piece("White", "E", 1) TS2511: Cannot create an instance of an abstract class.
class Position {
    constructor(file, rank) {
        this.file = file;
        this.rank = rank;
    }
    distanceFrom(position) {
        return {
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
            rank: Math.abs(position.rank - this.rank)
        };
    }
}
class King extends Piece {
    constructor(color, file, rank) {
        super(color, file, rank);
        this.extra = "extra";
    }
    canMoveTo(position) {
        const distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    }
}
class Game {
    constructor() {
        this.pieces = Game.makePieces();
    }
    static makePieces() {
        return [
            new King("White", "E", 1)
        ];
    }
    print() {
        console.log(this.pieces);
    }
}
const g = new Game();
g.print();
// class Queen extends Piece {}
// class Bishop extends Piece {}
// class Knight extends Piece {}
// class Rook extends Piece {}
// class Pawn extends Piece {}
//# sourceMappingURL=chess.js.map