const EventEmitter=require('events');


const customEmitter= new EventEmitter()

// We can have as many functions as we would want here
// Over here, we listen for any events.
customEmitter.on('response', (name,id)=>{
    console.log(`data received ${name} with id: ${id}`)
})

customEmitter.on('response', ()=>{
    console.log(`some other logic`)
})

// Over here, we emit the events
// If you place this above your on. event function
// nothing will be shown
customEmitter.emit('response', 'john',34)

// Code Result
// We listened using the on. for the event before we emit it