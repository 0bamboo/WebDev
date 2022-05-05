// Objects :

const person = {
	name:"something",
	age: 25
};

person.name = "echo";

console.log(person.name);
console.log(person["age"]);

// Arrays :

const anotherPerson = {
	name: "anotherPerson",
	age: 99,
	hobbies: ["Sports", "Gaming"] // array
};

console.log(anotherPerson.hobbies[1]);

// Mixed array:

let mixedArray : any[];
mixedArray = ["something", 14, person];

console.log(mixedArray[2].name);

for (const hobby of anotherPerson.hobbies)
{
	console.log(hobby.toUpperCase());
}

for (const thing of mixedArray)
{
	console.log(thing);
}

// Eums :

enum Role {ADMIN, AUTHOR, DIRECTOR};
enum test { notone = 4, nottwo, notthree};

console.log(Role.AUTHOR, test.nottwo);

// The any type : avoid any type .

// Union types

function combine(first: string | number, second: string | number)
{
	if ( typeof first === 'number' && typeof second === 'number')
		return (first + second);
	else
		return (first.toString() + second.toString());
}

let result = combine("hi", " there !");
let result2 = combine(23, 21);

console.log(result, result2);

// Literal types :

let someObject : {
	name: string;
	something: "thing" | "anotherThing";
} = {
	name: "any",
	something: "thing" // anotherThing is only allowed, 
}

// Aliases :

// create alias with type keyword,

type testAlias = number | string;

let al: testAlias = "test";
let al2: testAlias = 23;


// Function return type :

function _test_(arg: number = 5): number{
	return arg;
}

let ret = _test_(5);

function vd(arg: string): void {
	console.log("this is a void functio");
	return;
}

let func: Function = _test_; // func acts like _test_


function addAndHandle(n1:number, n2:number, callback: (num:number) => void): void
{
	const res = n1 + n2;

	callback(res);
}

addAndHandle(1,23, (num) => {
	console.log("this is the result : ", num);
});

let somethingelse: string = "test";

// DOM

const anchor = document.querySelector("a");

console.log(anchor.href)

// function that returnr a product 

interface product{
	id: number,
	name: string,
	price: number
}

function getProduct(id: number): product
{
	return {
		id: id,
		name: ` Awesome Gadget ${id}`,
		price:99
	};
};

let counter = 0;

let arr: (string | number)[] = ["int", 23];

// tuple 
let tup: [number, number, number] = [23, 233, 2];

// example of a class :

class Person {
	private _age: number;
	private _name: string;

	public get age(): number {
		return this._age;
	}

	public set age(val: number) {
		this._age = val;
	}

	public get name(): string {
		return this._name;
	}

	public set name(val: string) {
		this._name = val;
	}

	public getData(): string {
		return (`My name is ${this._name} and my age is ${this._age}`);
	}

	constructor(name:string, age:number) {
		this._name = name;
		this._age = age;
	}
}

let instance = new Person("abdennacer", 25);

console.log(instance.getData()); 

// Inheritance :

class Employee extends Person {
	
	static numberOfEmps: number = 0; // this is a static property will be shared by all instances

	constructor(name: string, age: number, private jobTitle: string)
	{
		super(name, age);
		Employee.numberOfEmps++;
	}

	public getJobTitle(){
		return this.jobTitle;
	}

	public setJobTitle(val: string) {
		this.jobTitle = val;
	}

	public myJob(){
		return (`My job is ${this.jobTitle}`);
	}

	public static getHeadCount(): number{
		return Employee.numberOfEmps;
	}

}

let emp = new Employee("nowl01", 23, "Developper");
let anotherEmp = new Employee("something", 232, "some");

console.log(`Number of employees : ${Employee.getHeadCount()}`);

console.log(emp.getJobTitle(), emp.getData(), emp.myJob());


// Abstract class :

abstract class abs{
	constructor(private name: string, private age: number)
	{ }

	abstract getSomething(): string

	public getData(): string
	{
		return (`${this.name}, ${this.age}`);
	}
}

class inheriFromAbs extends abs {
	constructor(name: string, age: number)
	{
		super(name, age);
	}

	public getSomething(): string
	{
		return "hell";
	}
}

// Interfaces :

