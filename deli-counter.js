let katzDeliLine = [];

const takeANumber = (queue, newCustomer) => {
	queue.push(newCustomer);
	return `Welcome, ${newCustomer}. You are number ${queue.length} in line.`;
};

const nowServing = queue => {
	if (queue.length > 0) {
		return `Currently serving ${queue.shift()}.`;
	} else {
		return 'There is nobody waiting to be served!';
	}
};

const currentLine = queue => {
	let message = `The line is currently: 1. ${queue[0]}`;
	if (queue.length > 0) {
		for (let i = 1; i < queue.length; i++) {
			message += `, ${i + 1}. ${queue[i]}`;
		}
	} else {
		return 'The line is currently empty.';
	}
	return message;
};
export { katzDeliLine, takeANumber, currentLine, nowServing };
