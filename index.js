// Your code here

class Polygon {
  constructor(sides){
    this.sides = sides
  }
  get countSides() {
    return this.sides.length
    // if sides = 3, return triangle
  }
  get perimeter() {
    return this.sides.reduce((sum, currentSide) => sum + currentSide, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    if (this.count !== 3) {
      return;
    }
    return ((side1 === side2) && (side1 === side3) && (side2 === side3))
  }
}

class Square extends Polygon {
  get isValid() {
    // checks if there is 4 sides
    // checks if each side is equal

  }
}
