class Person
{
 constructor(a,b,c,d,e,f)
 {
    this.Name=a;
    this.age=b;
    this.address=c;
    this.phno=d;
 }
 persondetails()
 {
    return`Person details name ${this.name} age${this.age} address${this.address} phno${this.phno}`;
 }

}
var per= new Person("dharani",21,"sengadu",8790090430);
console.log(per.persondetails());