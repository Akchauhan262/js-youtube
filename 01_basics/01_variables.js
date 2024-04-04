const accountId = 144553
let accountEmail = "akash@google.com"
var accountPassword = "12345"
accountCity = "Gorakhpur"
let = accountState

// accountId = 2 // Not allowed

accountEmail = "ak@ak.com"
accountPassword = "123123"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer Not to use var
Because of issue in block scope functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])