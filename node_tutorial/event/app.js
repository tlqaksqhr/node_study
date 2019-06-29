var events = require('events');
var util = require('util');

class Person extends events.EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
};

const james = new Person('james');
const mary = new Person('mary');
const ryu = new Person('ryu');
const people = [james, mary, ryu];

people.forEach((person) => {
    person.on('speak',(mssg) => {
        console.log(person.name + ' said: ' + mssg);
    });
});

james.emit('speak', 'hey dudes');

/*

var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', (mssg) => {
    console.log(mssg);
});

myEmitter.emit('someEvent','the event was emitted');
*/