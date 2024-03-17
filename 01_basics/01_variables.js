const accountId = 144553
let accountEmail = "durgeshpatil@gmail.com"
var accountPassword = "1122"
accountCity = "Thane"

// accountId = 1  //Can't allow


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

accountEmail = "ram@yahoo.com"
accountPassword = "3322"
accountCity = "Mumbai"

console.table([accountId,accountEmail, accountPassword, accountCity])