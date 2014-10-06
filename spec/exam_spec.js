describe('Reference Types vs Value Types', function(){
    describe('when we set a and b to integers, set a to e, then change b to another integer', function() {
        //Sweetie, here are some examples to test
        var a = 6;
        var b = 7;
        a = b;
        b = 8;
        it('what do u expect will be the value of a here?', function() {
            expect(a).toBe('???');
        });
    });
    describe('when we set a and b to objects, set a to b, then change the name of b', function() {
        var a = {
            name: 'tommy',
            age: 34
        }
        var b = {
            name: 'sweetie',
            age: 31
        };
        a = b;
        b.name = 'esa-matti';
        it('what do u expect will be the value of a.name?', function() {
            expect(a.name).toBe('???');
        });
        it('what do u expect will be the value of b.name?', function() {
            expect(b.name).toBe('???');
        });
    });
    describe('when we set a and b to arrays, set a to b, then push to the end of b', function() {
        var a = [1,2,3]
        var b = [4,5,6]
        a = b;
        b.push(10);
        it('what do u expect will be in array a?', function() {
            expect(a).toEqual('???');
        });
        it('what do u expect will be in array b', function() {
            expect(b).toEqual('???');
        });
    });
    describe('when we create a clone of array a and set it to b, what happens?', function() {
        var o = {
            name: 'tommy',
            age: 34
        }
        var a = [1,true,o,2] 
        var b = a.slice(0); //creates a copy of array a
        a.push(false);
        b.push(25);
        it('what will array a contain?', function() {
            expect(b).toEqual('???');
        });
        it('what will array b contain?', function() {
            expect(a).toEqual('???');
        });
        it('what happens if we change the name property of o? does the change happen in both arrays or just one?', function() {
            o.name='sweetie';
            expect(a).toEqual('???');
            expect(b).toEqual('???');
        });
    });
    describe('what about when we pass an object to a function and change a property of the object in the function?', function() {
        var o = {
            name: 'sweetie',
            age: 21,
            wasPenetrated: false
        } 
        function penetrateSweetie(sweetie) {
            sweetie.wasPenetrated = true
        }
        it('???', function() {
            penetrateSweetie(o);
            expect(o.wasPenetrated).toBe('???');
        });
    });
    describe('what about when we pass an object to a function and then set the argument to a new object?', function() {
        var o = {
            name: 'sweetie',
            age: 21,
            wasPenetrated: false
        } 
        function doesThisChangeWhatORefersToOrNot(sweetie) {
            sweetie = {
                name: 'notsweetie',
                age: 50,
                wasPenetrated: 'iHopeSoByNow'
            }
        }
        it('???', function() {
            doesThisChangeWhatORefersToOrNot(o);
            expect(o.wasPenetrated).toBe('???');
        });
    });
    describe('what about when we define a variable outside a function then point it to something new inside?', function() {
        var o = {
            name: 'sweetie',
            age: 21,
            wasPenetrated: false
        } 
        function doesThisModifyOWhenItIsNotPassedAsAnArg() {
            o = {
                name: 'notsweetie',
                age: 50,
                wasPenetrated: 'iHopeSoByNow'
            }
        }
        it('???', function() {
            expect(o.wasPenetrated).toEqual('???');
            doesThisModifyOWhenItIsNotPassedAsAnArg();
            expect(o.wasPenetrated).toBe('???');
        });
    });
});