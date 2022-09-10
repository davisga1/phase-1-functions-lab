function distanceFromHqInBlocks(x){
    return Math.abs(x - 42)
}
function distanceFromHqInFeet(y){
    return (distanceFromHqInBlocks(y) * 264)
}
function distanceTravelledInFeet(a, b){
    return (Math.abs(a - b) * 264)
}
function calculatesFarePrice(a, b){
    let fare = (distanceTravelledInFeet(a, b))
    if (fare < 400){
        return 0
    } else if (fare >= 400, fare <= 2000){
        return ((fare - 400) * 2 / 100)
    } else if (fare > 2000, fare < 2500){
        return 25
    } else if (fare > 2500){
        return 'cannot travel that far'
    }
}