let person=
{
    firstname:"Priyanka",
    Lastname:"Reddy",
    age:20,
    weight:50
}
console.log(person["firstname"])
console.log(person.age)
//Add new property to the existing object
person["height"]=5.3
console.log(person["height"])
//update existing property
person["weight"]=55
console.log(person["weight"])

//Remove the property from the object
delete person["age"]
console.log(person["age"])