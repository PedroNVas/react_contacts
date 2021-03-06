/*
A Symbol is a unique and immutable data structure often used to identify object's properties.
 */


const sym1 = Symbol('apple');
console.log(sym1);

const bowl = {
	'apple': {color: 'red', weight: 136.078},
	'banana': {color: 'yellow', weight: 183.15},
	'orange': {color: 'orange', weight: 170.097}
};

const bowl01 = {
	'apple': {color: 'red', weight: 136.078},
	'banana': {color: 'yellow', weight: 183.151},
	'orange': {color: 'orange', weight: 170.097},
	'banana': {color: 'yellow', weight: 176.845}
};
console.log(bowl01);

const bowlSymbol = {
	[Symbol('apple')]: {color: 'red', weight: 136.078},
	[Symbol('banana')]: {color: 'yellow', weight: 183.15},
	[Symbol('orange')]: {color: 'orange', weight: 170.097},
	[Symbol('banana')]: {color: 'yellow', weight: 176.845}
};
console.log(bowlSymbol);