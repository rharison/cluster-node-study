async function main (message) {
  const pid = process.pid
  console.log(`${pid} got a message!`, message.name)
}

process.once('message', main)