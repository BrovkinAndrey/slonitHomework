function createLogger() {
  const messages = [];
  return {
    log(message) {
      messages.push(message);
    },
    getLogs() {
      return messages;
    },
  };
}

function createRandomGenerator(min, max) {
  return function() {
    return Math.floor(Math.random() * max + min);
  };
}

export { createLogger, createRandomGenerator };
