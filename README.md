###Currencies - Meteor Smart Package

This smart package keeps a running collection of currency exchange rates and offers
functions to convert and display exchange rates, gold/silver rates (grams and ounces),
display currencies and more.  This package also includes a default currencies drop
down select function to use in forms.  This package creates a collection named "currencies"
and updates it server side from OpenExchangerates.org every 6 hours.

###How to use?

1. Install [meteorite](https://github.com/oortcloud/meteorite)
2. `mrt add currencies`
3. Get API Key from https://openexchangerates.org/signup/free
4. In your application code (visible to server) add this line -> oeapikey = "yourapikeyhere";

###Functions

####formatCurr(number, currency, decimals)

Formats a currency by the currency map
within the package adding symbols and automatically removing decimals from currencies
that do not use.

formatCurr(12345,"USD"); // returns $12,345.00
formatCurr(12345,"USD",false); // returns $12,345

####currValue(currency)

Gives the currency exchange rate compared to USD.

currValue("IDR"); // returns how many Indonesian Rupiah equal to 1 USD

-

####gold(curr, unit)

Gives the value of gold in the currency and units given.

gold("IDR","grams"); // returns value of 1 gram of gold in IDR
gold("IDR","ounces"); // returns value of 1 ounce of gold in IDR

-

####silver(curr, unit)

same as gold, but for silver

-

####nisab(curr, option)

Gives the Islamic nisab in the given currency. Options include "gold", "silver", 
"high", "low" to calculate the nisab using gold, silver or the higher or lower of
the two values. Defaults to lower.

nisab("IDR"); // returns nisab in IDR for silver since it's value is lower
nisab("USD","gold"); // returns the gold nisab in USD rate

-

####currDropdown(id, cls)

Options id and cls are option to add an id and class to the dropdown.  Returns a
drop down select list with all supported currencies.

-

####showGold()

Uses Session variables "curr" and "unit" with formatCurr to automatically display
the value of gold in your set Currency and Weight Units.

-

####showSilver()

Uses Session variables "curr" and "unit" with formatCurr to automatically display
the value of silver in your set Currency and Weight Units.

-

####showNisab()

Uses Session variables "curr" and "unit" with formatCurr to automatically display
the desired Nisab (using default value "low").
