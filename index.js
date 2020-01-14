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
    //checks if there are 3 sides
    // checks if it is a triangle
  }
}

class Square extends Polygon {
  get isValid() {
    // checks if there is 4 sides
    // checks if each side is equal
    function checkSides() {
     const perimeter = this.perimeter
     return this.sides.some((side) => (perimeter - side) <= side)
   }

   if (this.getCount !== 3) {
     return false
   } else if (checkSides.call(this)) {
     return false
   } else {
     return true
   }
  }
}
