// Code your solution in this file!
function distanceFromHqInBlocks(position) {
    return Math.abs(position -42);
}
function distanceFromHqInFeet(position) {
    return distanceFromHqInBlocks(position) * 264;
}
function distanceTravelledInFeet(depart, arrive) {
    return Math.abs(arrive - depart) * 264;
}
function calculatesFarePrice( depart, arrive){
    const distance = distanceTravelledInFeet(depart, arrive);

    if ( distance <= 400) {
        return 0;
    }
    else if (distance <= 2000){
        return (distance -400) *0.02;
    }
    else if (distance <= 2500){
        return 25;
    }
    else {
        return "cannot travel that far"
    }
}