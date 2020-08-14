class Queue {
	constructor(limit = 20) {
		this.limit = limit;
		this.queue = [];
	}
	
	dequeue() {
		if(this.queue === undefined || this.queue === null || this.queue.length === 0) {
			console.log('This queue is empty');
		} else {
			return this.queue.shift();
		}
	}
	
	enqueue(newItem) {
		if(this.queue.length < this.limit) {
			this.queue.push(newItem);
		} else {
			console.log('Queue is full');
		}
	}
	
	peek() {
		return this.queue[0];
	}
	
	isEmpty() {
		if(this.queue === undefined || this.queue === null || this.queue.length === 0) {
			console.log('This queue is empty');
			return true;
		} else {
			return false;
		}
	}
}

try {
	const queue = new Queue(10);
	queue.enqueue('Fred');
	queue.enqueue('John');
	queue.enqueue('Keith');
	queue.enqueue('Adiyan');
	queue.enqueue('Mikhael');
	console.log(queue.dequeue());
	console.log(queue.dequeue());
	console.log(queue.peek());
} catch (err){
	console.log(err.message);
}