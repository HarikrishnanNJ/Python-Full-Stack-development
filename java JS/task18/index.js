let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

for (let i = 0; i< largeCountries.length; i++) {
   
    console.log(largeCountries [i])
    largeCountries.shift("Tuvalu")
    largeCountries.unshift("china")

    largeCountries.pop("Monaco")
    largeCountries.push("Pakistan")

    console.log(largeCountries [i])
    

    
}