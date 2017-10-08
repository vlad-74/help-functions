function glUser(name){
    this.name = name;
}

glUser.prototype.hello = function(who){
    console.log("Hello, " + who.name);
};
global.glUser = glUser;

let GLBL = [
	{id: 3, title:"first"},
	{id: 1, title:"second"},
	{id: 2, title:"third"},
];

let GLBL2 = [
    {id: 3, title:"first"},
    {id: 1, title:"second"},
    {id: 2, title:"third"},
];

let GLBL3 = [
    {id: 3, title:"first"},
    {id: 1, title:"second"},
    {id: 2, title:"third "},
];
global.GLBL = GLBL;
global.GLBL2 = GLBL2;
global.GLBL3 = GLBL3;

let glblNumbers = [4, 5, 6, 7, 1, 2, 3,  8, 9];
global.glblNumbers = glblNumbers;

let glblArr = [
    {a:"a",b:"a",c:"a"},
    {a:"b",b:"a",c:"b"},
    {a:"b",b:"a",c:"a"},
    {a:"b",b:"a",c:"b"},
    {a:"b",b:"b",c:"a"},
    {a:"b",b:"b",c:"b"},
    {a:"b",b:"b",c:"a"},
    {a:"b",b:"b",c:"b"},
    {a:"b",b:"b",c:"a"},
    {a:"b",b:"b",c:"b"},
    {a:"b",b:"b",c:"a"},
    {a:"c",b:"b",c:"b"},
    {a:"c",b:"c",c:"a"}
];
global.glblArr = glblArr;

// console.log("\nКонтекст из data/global.js\n");

