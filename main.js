const EXPECTED_MINUTES_IN_OVEN = 40
const PREPARATIION_MINUTES_PER_LAYER = 2


function remainingMinutesInOven(actual_minutes_in_oven) {
    return EXPECTED_MINUTES_IN_OVEN - actual_minutes_in_oven
}


function preperationTimeInMinutes(number_of_layers) {
    return number_of_layers * PREPARATIION_MINUTES_PER_LAYER
}


function totalTimeInMinutes(number_of_layers, actual_minutes_in_oven) {
    return preperationTimeInMinutes(number_of_layers) + actual_minutes_in_oven 
}