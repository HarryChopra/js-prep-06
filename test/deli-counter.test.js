import * as deli from '../deli-counter.js';

describe('deli', () => {
	let katzDeli = [];
	let otherDeli = ['Steven', 'Blake', 'Avi'];

	beforeEach(() => {
		katzDeli = [];
		otherDeli = ['Steven', 'Blake', 'Avi'];
	});
	describe('takeANumber', () => {
		test('adds a person to the line', () => {
			expect(deli.takeANumber(katzDeli, 'Ada')).toEqual(
				'Welcome, Ada. You are number 1 in line.'
			);
			expect(katzDeli).toEqual(['Ada']);
		});

		test('appends the person the end of the line if there are already people on it', () => {
			expect(deli.takeANumber(otherDeli, 'Grace')).toEqual(
				'Welcome, Grace. You are number 4 in line.'
			);
			expect(otherDeli).toEqual(['Steven', 'Blake', 'Avi', 'Grace']);
		});

		test('properly handles multiple people being added', () => {
			deli.takeANumber(katzDeli, 'Ada');
			deli.takeANumber(katzDeli, 'Grace');
			deli.takeANumber(katzDeli, 'Kent');

			expect(katzDeli).toEqual(['Ada', 'Grace', 'Kent']);
		});
	});

	describe('nowServing', () => {
		test('returns the line is empty when no one is on line', () => {
			expect(deli.nowServing([])).toEqual('There is nobody waiting to be served!');
		});

		test('returns an announcement about the person it is serving, and shifts the line', () => {
			const deliLine = ['Steven', 'Blake', 'Avi'];
			expect(deli.nowServing(deliLine)).toEqual('Currently serving Steven.');
			expect(deliLine).toEqual(['Blake', 'Avi']);
		});
	});

	describe('currentLine(line)', () => {
		test('returns "The line is currently empty." if no one is in line', () => {
			expect(deli.currentLine([])).toEqual('The line is currently empty.');
		});

		test('says who is in line when there are people waiting', () => {
			expect(deli.currentLine(['Bill', 'Jane', 'Ann'])).toEqual(
				'The line is currently: 1. Bill, 2. Jane, 3. Ann'
			);
		});
	});
});
