// Objects :
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = {
    name: "something",
    age: 25
};
person.name = "echo";
console.log(person.name);
console.log(person["age"]);
// Arrays :
var anotherPerson = {
    name: "anotherPerson",
    age: 99,
    hobbies: ["Sports", "Gaming"] // array
};
console.log(anotherPerson.hobbies[1]);
// Mixed array:
var mixedArray;
mixedArray = ["something", 14, person];
console.log(mixedArray[2].name);
for (var _i = 0, _a = anotherPerson.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
for (var _b = 0, mixedArray_1 = mixedArray; _b < mixedArray_1.length; _b++) {
    var thing = mixedArray_1[_b];
    console.log(thing);
}
// Eums :
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["DIRECTOR"] = 2] = "DIRECTOR";
})(Role || (Role = {}));
;
var test;
(function (test) {
    test[test["notone"] = 4] = "notone";
    test[test["nottwo"] = 5] = "nottwo";
    test[test["notthree"] = 6] = "notthree";
})(test || (test = {}));
;
console.log(Role.AUTHOR, test.nottwo);
// The any type : avoid any type .
// Union types
function combine(first, second) {
    if (typeof first === 'number' && typeof second === 'number')
        return (first + second);
    else
        return (first.toString() + second.toString());
}
var result = combine("hi", " there !");
var result2 = combine(23, 21);
console.log(result, result2);
// Literal types :
var someObject = {
    name: "any",
    something: "thing" // anotherThing is only allowed, 
};
var al = "test";
var al2 = 23;
// Function return type :
function _test_(arg) {
    if (arg === void 0) { arg = 5; }
    return arg;
}
var ret = _test_(5);
function vd(arg) {
    console.log("this is a void functio");
    return;
}
var func = _test_; // func acts like _test_
function addAndHandle(n1, n2, callback) {
    var res = n1 + n2;
    callback(res);
}
addAndHandle(1, 23, function (num) {
    console.log("this is the result : ", num);
});
var somethingelse = "test";
// DOM
var anchor = document.querySelector("a");
console.log(anchor.href);
function getProduct(id) {
    return {
        id: id,
        name: " Awesome Gadget ".concat(id),
        price: 99
    };
}
;
var counter = 0;
var arr = ["int", 23];
// tuple 
var tup = [23, 233, 2];
// example of a class :
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (val) {
            this._age = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getData = function () {
        return ("My name is ".concat(this._name, " and my age is ").concat(this._age));
    };
    return Person;
}());
var instance = new Person("abdennacer", 25);
console.log(instance.getData());
// Inheritance :
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, jobTitle) {
        var _this = _super.call(this, name, age) || this;
        _this.jobTitle = jobTitle;
        Employee.numberOfEmps++;
        return _this;
    }
    Employee.prototype.getJobTitle = function () {
        return this.jobTitle;
    };
    Employee.prototype.setJobTitle = function (val) {
        this.jobTitle = val;
    };
    Employee.prototype.myJob = function () {
        return ("My job is ".concat(this.jobTitle));
    };
    Employee.getHeadCount = function () {
        return Employee.numberOfEmps;
    };
    Employee.numberOfEmps = 0; // this is a static property will be shared by all instances
    return Employee;
}(Person));
var emp = new Employee("nowl01", 23, "Developper");
var anotherEmp = new Employee("something", 232, "some");
console.log("Number of employees : ".concat(Employee.getHeadCount()));
console.log(emp.getJobTitle(), emp.getData(), emp.myJob());
// Abstract class :
var abs = /** @class */ (function () {
    function abs(name, age) {
        this.name = name;
        this.age = age;
    }
    abs.prototype.getData = function () {
        return ("".concat(this.name, ", ").concat(this.age));
    };
    return abs;
}());
var inheriFromAbs = /** @class */ (function (_super) {
    __extends(inheriFromAbs, _super);
    function inheriFromAbs(name, age) {
        return _super.call(this, name, age) || this;
    }
    inheriFromAbs.prototype.getSomething = function () {
        return "hell";
    };
    return inheriFromAbs;
}(abs));
// Interfaces :
