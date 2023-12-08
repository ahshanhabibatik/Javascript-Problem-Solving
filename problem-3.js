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

   
