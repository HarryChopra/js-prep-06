let cart = [];

const addToCart = item => {
	cart.push({ itemName: item, itemPrice: Math.floor(Math.random() * (100 - 1 + 1)) + 1 });
	return `${item} has been added to your cart.`;
};

const viewCart = () => {
	let message = '';
	if (cart.length > 0) {
		message = `In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice}`;
		for (let count = 1; count < cart.length - 1; count++) {
			message += `, ${cart[count].itemName} at ${cart[count].itemPrice}`;
		}
		return (
			message +
			`, and ${cart[cart.length - 1].itemName} at ${cart[cart.length - 1].itemPrice}`
		);
	} else {
		return 'Your shopping cart is empty.';
	}
};

const total = () => {
	let totalSum = 0;
	cart.forEach(item => (totalSum += item.itemPrice));
	return totalSum;
};

const removeFromCart = item => {
	let itemIndex = cart.findIndex(elem => elem['itemName'] == item);

	if (itemIndex > -1) {
		cart.splice(itemIndex, 1);
		return cart;
	} else {
		return 'That item is not in your cart';
	}
};

const placeOrder = card => {
	if (card == undefined) {
		return "Sorry, we don't have a credit card on file for you.";
	} else {
		let message = `Your total cost is ${total()}, which will be charged to the card ${card}.`;
		cart = [];
		return message;
	}
};

addToCart('Banana');
addToCart('Apple');
addToCart('Ginger');

console.log(viewCart());
removeFromCart('Ginger');
console.log(placeOrder(123456));
console.log(viewCart());
