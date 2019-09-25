console.log("chess")

abstract class Piece {
  protected position: Position
  constructor(
    private readonly color: Color,
    file: File,
    rank: Rank
  ) {
    this.position = new Position(file, rank)
  }

  public moveTo(position: Position) {
    this.position = position
  }

  public abstract canMoveTo(position: Position): boolean
}

type Color = "Black" | "White"
type File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H"
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

// new Piece("White", "E", 1) TS2511: Cannot create an instance of an abstract class.

class Position {
  constructor(
    private file: File,
    private rank: Rank
  ) {}

  public distanceFrom(position: Position) {
    return {
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
      rank: Math.abs(position.rank - this.rank)
    }
  }
}

class King extends Piece {
  private extra: string
  constructor(color: Color, file: File, rank: Rank) {
    super(color, file, rank)
    this.extra = "extra";
  }
  public canMoveTo(position: Position) {
    const distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}

class Game {
  private static makePieces() {
    return [
      new King("White", "E", 1)
    ]
  }
  private pieces = Game.makePieces()

  public print() {
    console.log(this.pieces)
  }
}

const g = new Game()
g.print()
// class Queen extends Piece {}
// class Bishop extends Piece {}
// class Knight extends Piece {}
// class Rook extends Piece {}
// class Pawn extends Piece {}
