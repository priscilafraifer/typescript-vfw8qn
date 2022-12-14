// Import stylesheets
import './style.css';

// Write TypeScript code!

let list: number[] = [1, 2, 3];
let otherList: Array<number> = [1, 2, 3];

const appDiv: HTMLElement = document.getElementById('app1');
appDiv.innerHTML = `
<h1>Array declaration</h1>
<h2>List: ${list}</h2>
<h2>other list: ${otherList}</h2>
`;

let me: [string, number];
me = ['Priscila', 35];

const appTuple: HTMLElement = document.getElementById('app2');
appTuple.innerHTML = `
<h1>Tuple</h1>
<h1>Me chamo ${me[0]} e tenho ${me[1]} anos</h2>
`;

enum Color {
  Red,
  Green,
  Blue,
}
let color1: Color = Color.Green;

enum ColorWithRef {
  Red = 10,
  Green = 20,
  Blue = 30,
}
let color2: ColorWithRef = ColorWithRef.Blue;

const appEnum: HTMLElement = document.getElementById('app3');
appEnum.innerHTML = `
<h1>Enumerated types</h1>
<h2>Cor 1: ${color1}</h2>
<h2>Cor 2: ${color2}</h2>
`;

let notSure: any = 4;
notSure = 'Maybe I am a string';

const appAny: HTMLElement = document.getElementById('app4');

appAny.innerHTML = `
<h1>Any variable</h1>
<h2>${notSure}</h2>
`;

function warnUser(): void {
  console.log('This is my warning message');
}

let myFunction: void = undefined;

let unusable = null;

myFunction;

const appVoid: HTMLElement = document.getElementById('app5');
appVoid.innerHTML = `
<h1>void</h1>
<h2>unusable: ${unusable}</h2>
<h2>myFunction: ${myFunction}</h2>
`;

//declare function create(o: object | null): void;
//create({ prop: 0 }); //ok
//create(null); //ok
//create (42); Erro
//create("string"); //Erro
//create(false); //Erro
//create(undefined); //Ok

//const appObj: HTMLElement = document.getElementById('app6');
//appObj.innerHTML = `
//<h1>Object</h1>
//`;

let someValue: any = 'this is a string';
let strLenght: number = (<string>someValue).length;

let someValue2: any = 'this is a string';
let strValue2: number = (someValue2 as string).length;

const appType: HTMLElement = document.getElementById('app7');
appVoid.innerHTML = `
<h1>Type assertions</h1>
`;

function sum(n1: number, n2: number): number {
  return n1 + n2;
}

function fullName(pessoa: { name: string; lastname: string }): string {
  return pessoa.name + '' + pessoa.lastname;
}

const appFunction: HTMLElement = document.getElementById('app8');
appFunction.innerHTML = `
<h1>Functions</h1>
<h2>Soma de 2 e 3: ${sum(2, 3)}</h2>
<h2>Soma de 11 e 329: ${sum(11, 329)}</h2>
<h2>Meu nome completo: ${fullName({
  lastname: 'Fraifer',
  name: 'Priscila Vieira',
})}</h2>
`;

let title: string = 'Ol?? Mundo!';
let paragraph: string = 'Blablabla...';

let counter = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  const appP: HTMLElement = document.getElementById('app.p');
  appP.innerHTML = 'Contador: ' + counter;
}, 1000);

const btn = document.getElementById('app.btn');
btn?.addEventListener('click', alertMethod);
function alertMethod(this: HTMLElement, ev: Event) {
  alert('Alertando com typscript');
}

//Write TypeScript code!

const appH1: HTMLElement = document.getElementById('app.h1');
appH1.innerHTML = title;

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter('MyApp');

const appClasse: HTMLElement = document.getElementById('app9');
appClasse.innerHTML = `
  <h1>Classes</h1>
  <h2>${greeter.greet()}!</h2>
`;
