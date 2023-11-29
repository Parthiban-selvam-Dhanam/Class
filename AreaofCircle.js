class Circle
{
 constructor(r,colour)
 {
    this.radious=r;
    this.colour=colour;
    
 }
 Areaofcircle()
 {
    return`Area of circle is ${3.14*this.radious*this.radious}`;
 }
 Getcolour()
 {
   return`Colour of the circle is ${this.colour}`
 }
 Circumfrence()
 {
   return`Circumfrence of the circle is${2*Math.PI*this.radious}`
   }

}
var Area= new Circle(2, "red");
console.log(Area.Areaofcircle(),Area.Getcolour(),Area.Circumfrence());