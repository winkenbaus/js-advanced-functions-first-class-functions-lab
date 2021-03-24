const returnFirstTwoDrivers = function(drivers) { 
        return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers) {
        return drivers.slice(2,4)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]
function createFareMultiplier(){
    let fare = (5)
        return function fareMultiplier(fare){
            return (fare*5)
        }
}
function fareDoubler(){
    let fare = (10)
    return (fare*2)
}
function fareTripler(){
    let fare=(12)
    return (fare*3)
}
function selectDifferentDrivers(drivers, func){
    return func(drivers)

}


