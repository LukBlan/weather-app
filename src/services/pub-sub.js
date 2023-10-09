export {subscribe, emit}

const events = {}

function subscribe(eventName, handler) {
  if (events[eventName] === undefined) {
    events[eventName] = [];
  }

  events[eventName].push(handler);
}

function emit(eventName, data) {
  const event = events[eventName];
  event.forEach(handler => handler(data));
}