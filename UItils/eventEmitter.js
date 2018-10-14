class EventEmitter {
    constructor () {
        console.log('Constructed')
        this.events = {}
    }

    on (eventName, callback) {
        console.log(eventName + ' registered!');
        let tempArr = this.events[eventName];

        if (arguments.length < 2) { throw new TypeError('arguments error '); }
        if (!tempArr) tempArr = [];
        if (callback.isArray()) {
            tempArr = tempArr.concat(callback);
        } else tempArr.push(callback);

        this.events[eventName] = tempArr;
    }


    emit (eventName, ...params) {
        console.log(eventName + ' emitted!');

        let candidateEvents = this.events[eventName];
        if(candidateEvents) {
            for (let cb of candidateEvents) {
                cb.apply(this, params);
            }
        }
    }

    remove (eventName, listener) {
        console.log(eventName + ' removed!');

        let eventFamily = this.events[eventName];
        if (eventFamily.includes(listener)) {
            eventFamily.slice(eventFamily.indexOf(listener), 1);
        }
        this.events[eventName] = eventFamily;
    }
}

// Example
const e = new EventEmitter();

const cb = function (a, b) {
    console.log('Water to ' + a + ' Fire to ' + b);
}

e.on('hype', cb);
e.emit('hype', 'shui', 'huo', 1998);