let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
// console.log(largeCountries)
console.log("old largeCountries array")
for (let index = 0; index < largeCountries .length; index++) {
    console.log(largeCountries [index])
    
}


largeCountries.shift()
largeCountries.unshift("China")

largeCountries.pop()
largeCountries.push("pakistan")
console.log("")

console.log("new largeCountries array")
for (let index = 0; index < largeCountries .length; index++) {
    console.log(largeCountries [index])
    
}


// console.log(largeCountries)

