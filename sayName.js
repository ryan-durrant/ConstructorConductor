//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age){
  this.name = name;
  this.age = age;
};

//Now create three instances of Person with data you make up

  //code here
var jimmy = new Person('Jimmy', 54);
var jamie = new Person('Jamie', 42);
var johnny = new Person('Johnny', 38);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function() {
  alert(this.name);
};

//jimmy.sayName();
