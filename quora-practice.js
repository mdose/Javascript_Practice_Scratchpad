// Write a maybe function that, given a predicate (a function that returns a
// boolean value) and any other function, only calls the latter if the former
// returns true: maybe(x => x > 100, myFn). If the predicate returns true, the
// value of x should be passed to myFn. If it the predicate returns false, x
// should be returned unchanged.



// makes powerful function factory
// given a predicate func(returns boolean) & any other func
function maybe(predicate, func) {
    //maybe function returns a function which takes in x
    return function(x) {
        // if predicate is true when called (taking in x as arguement)
        if (predicate(x)) {
            // pass x to the other func
            return func(x);
        }
        else {
            // otherwise return x unchanged
            return x;
        }
    };
}

// Write a compose function that returns the result of all the functions passed
// into it, passing the returned value of a function to the function on its
// left: const foo = compose(x => x*2, x => x + 1, x => x - 5); foo(100). Here,
// result should be 192.

// Bonus: create three versions of compose: one that uses an iterative approach,
// one that uses Array.prototype.reduce, and one than uses recursion.

// Note: assume that each function given to compose only accepts one parameter.


// compose func takes in unkown num of funcs w/in array
function compose(...funcs){
    // returns func which takes in x (one parameter)
    return function(x){
        // good practice to not change x as parameter; so reassign to result
        let result = x;
        // loop through array of funcs starting at last index and ending at 0
        // changing index value after every loop
        for(let i = funcs.length - 1; i >= 0; i--){
            // continously mutate result using the given funcs
            result = funcs[i](result);
        }
        // return the final result
        return result;
    };
}
