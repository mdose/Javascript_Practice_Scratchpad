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