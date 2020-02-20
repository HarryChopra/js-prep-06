// Solved the following. Need to write tests in Jest
// Create a function theBeatlesPlay, which accepts two parameters--an array of musicians and an array of instruments.

let arrMusicians = ['John Lennon', 'Elton John', 'John Mayer', 'Zakir Hussein'];
let arrInstruments = ['Guitar', 'Piano', 'Guitar', 'Tabla'];

const theBeatlesPlay = (mus, inst) => {
	let arr = [];
	for (let i = 0; i < mus.length; i++) {
		arr.push(`${mus[i]} plays ${inst[i]}`);
	}
	return arr;
};

theBeatlesPlay(arrMusicians, arrInstruments);

// Create a function johnLennonFacts.
// Use a while loop to loop over the facts array and add `"!!!"` to the end of every fact.
// Return an array of strings with exclamation points.

const facts = [
	'He was the last Beatle to learn to drive',
	'He was never a vegetarian',
	'He was a choir boy and boy scout',
	'He hated the sound of his own voice'
];

const johnLennonFacts = inpArr => {
	let arr = [];
	while (inpArr.length > arr.length) {
		arr.push(`${inpArr[arr.length]}!!!`);
	}
	return arr;
};

johnLennonFacts(facts);

// Create a function iLoveTheBeatles which accepts a number as a parameter.

const iLoveTheBeatles = val => {
	let arr = [];
	do {
		arr.push(`I love the Beatles!`);
		val++;
	} while (val < 15);
	return arr;
};

iLoveTheBeatles(15);
