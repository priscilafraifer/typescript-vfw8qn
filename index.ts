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
