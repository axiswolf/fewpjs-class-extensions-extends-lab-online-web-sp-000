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

  }
}

class Square extends Polygon {

}
