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


