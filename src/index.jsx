export async function run(event, context) {
	// check the event data was received, return a message if not
	if (!event) {
		console.log('Invalid event');
		return {"msg": "invalid event"};
	}

	// check the event received was an issue created event, return a message if not
	if (!(event.activityItem.eventType == 'CREATED') || !(event.activityItem.object.type == 'ISSUE')) {
		let eventData = JSON.stringify(event);
		console.log('Unsupported event type: ' + eventData);
		return {"msg": "unsupported event type"};
	}

	console.log("Hello World!");

	return {"msg": "event received"};
}