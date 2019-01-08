function Promise(fn) {
    if (!(this instanceof Promise))
        throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
}


function resolve(self, newValue) {
    try {
        // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
        if (newValue === self)
            throw new TypeError('A promise cannot be resolved with itself.');
        if (
            newValue &&
            (typeof newValue === 'object' || typeof newValue === 'function')
        ) {
            var then = newValue.then;
            if (newValue instanceof Promise) {
                self._state = 3;
                self._value = newValue;
                finale(self);
                return;
            } else if (typeof then === 'function') {
                doResolve(bind(then, newValue), self);
                return;
            }
        }
        self._state = 1;
        self._value = newValue;
        finale(self);
    } catch (e) {
        reject(self, e);
    }
}



function doResolve(fn, self) {
    var done = false;
    try {
        fn(
            function(value) {
                if (done) return;
                done = true;
                resolve(self, value);
            },
            function(reason) {
                if (done) return;
                done = true;
                reject(self, reason);
            }
        );
    } catch (ex) {
        if (done) return;
        done = true;
        reject(self, ex);
    }
}


function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
        Promise._immediateFn(function() {
            if (!self._handled) {
                Promise._unhandledRejectionFn(self._value);
            }
        });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
        handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
}