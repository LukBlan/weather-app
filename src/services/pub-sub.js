export {subscribe, emit}

const events = {}

function subscribe(eventName, handler) {
  if (events[eventName] === undefined) {
    events[eventName] = [];
  }

  events[eventName].append(handler);
}

function emit(eventName, data) {
  const event = events[eventName];
  event.forEach(handler => handler(data));
}