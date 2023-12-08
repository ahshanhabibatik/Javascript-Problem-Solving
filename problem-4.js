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


 


