// Your code here

class Polygon {
  constructor(sides){
    this.sides = sides
  }
  get countSides() {
    return this.sides.length
  }
  get perimeter() {
    p_sides = this.sides
    p_sides.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue
    }, 0)
  }
}

class Triangle {

}

class Square {

}
