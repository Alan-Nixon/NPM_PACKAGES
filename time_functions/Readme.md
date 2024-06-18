Util Functions

util functions provides you functions that helps you to do some operations typically based on time

functions are :

1. numTokandM

   This method have a single parameter which recieves numbers or string includes number and return back the value for ex:

   if you pass "1500" then it will returns "1.5k", so 1500 -> 1.5k
   if it is "15,000" then 15k, so 15000 -> 15k
   this "1000000" to 1m so, 1000000 -> 1M

2. getTimeDifference

   This method also have a single parameter which recieve a string and you must pass a future date so
   it will print how much years, month, days,hours and minute is passed for ex:

   if you pass "2025-05-14" then "10 months 329 days 18 hours 11 minutes" will be the output

   note: pass the string in this format year-month-days

3. getDate

   This method have 1-2 parameter first parameter includes a number or string which is the number of days and if you does'nt give 2nd parameter then it will add the days with current date if the first parameter is negative value then it will substract. The second parameter receives a date and if it is included then it will add the days to the given date for ex:

   if the current date is "2024-06-18 then first parameter is 365 then return "2025-06-18"
   if the current date is "2024-06-18 then first parameter is -365 then return "2023-06-19"

   if you give like getDate(-5,"2024-01-10") then returns "2024-01-05"
   if you give like getDate(5,"2024-01-10") then returns "2024-01-10"

4. getLastMonths

   This method also have one parameter which recives number or string includes only numbers and return the last N months from current month as an array for ex:

   if the input is 12 then it will return last 12 months
   getLastMonths(12) -> returns

   [ 'July', 'August', 'September', 'October', 'November', 'December',
   'January', 'February', 'March', 'April', 'May', 'June' ]

   you cannot give a negtive value if it does then return []

5. getDatesOfCurrentYear

   As the name provides it recieves a array of strings and return the dates if the date is in current year. it may be not be that much necessary but there must be scenarios we use this for ex:

   if input array is ["2025-04-08", "2024-04-10","2025-12-12", "2024-04-08","2024-08-08"]
   then it returns [ '2024-04-10', '2024-04-08', '2024-08-08' ]

   the return array only includes the dates in the current year

6. generateOtp

    This functions generates a 6 digits number always. it must be unique it can be used for generating otp does'nt need any arguments call the function it return 6 digits that's it 



package name is util-functions and the functions that i created from the problems that i have faced it will have updates in future and if you have any suggetions or error occurs then contact me in this email
"alannixon2520@gmail.com" if you have any problems then share it with me. i will try to add the functions in my package  