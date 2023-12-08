function cubeNumber(number) {
    if (typeof number === "number") {
        if (number > 0) {
            const result = number ** 3;
            return result;
        }
        else {
            return "Please provide positive integer number"
        }

    }
    else if (typeof number === "string") {
        return "Please provide a valid number as input.";
    }
    else {
        return "It's neither a number nor a string"
    }
}





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



 
function sortMaker(arr) {
    if (arr.length === 2) {
        let firstElement;
        let secondElement;
        for (let i = 0; i < arr.length; i++) {
            if (i === 0) {
                firstElement = arr[i];
            }
            if (i === 1) {
                secondElement = arr[i];
            }
        }

        if (firstElement !== secondElement && firstElement > 0 && secondElement > 0) {
            if (firstElement > secondElement) {
                return [firstElement, secondElement];
            }
            if (secondElement > firstElement) {
                return [secondElement, firstElement];
            }
        }
        if (firstElement === secondElement) {
            return "equal";
        }
        if (firstElement < 0 || secondElement < 0) {
            return "Invalid Input";
        }
    } else {
        return "array must contain two numbers";
    }
}

   
 

function findAddress(obj) {
    let street = obj.street;
    let house = obj.house;
    let society = obj.society;

    if (street === undefined) {
        street = "__";

    }
    if (house === undefined) {
        house = "__";
    }
    if (society === undefined) {
        society = "__";
    }

    return street + "," + house + "," + society;
}




function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Invalid Input";
    }
    else {
        let total = 0;
        for (let i = 0; i < changeArray.length; i++) {
            let arrayIndex = i;
            let element = changeArray[arrayIndex];
            total = total + element;

        }
        if (total >= totalDue) {
            return true;
        }
        if (total < totalDue) {
            return false
        }
    }

}



 
 