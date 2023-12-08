function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Invalid Input: Input should contain only string.";
    }
    else if (string1.includes(string2)) {
        return true;
    }
    else {
        return false;
    }
}

 

