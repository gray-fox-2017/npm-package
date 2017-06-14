#NPM-csv-parsing
**Build new parser method from CSV file**
@[Authors|Deri Kurniawan|Hacktiv8]

**NPM-csv **is a simple method for return an object from CSV file
###Installing
> Just input npm-package into node_modules `npm install --save parsing-csv`
>
> And require on your file `var Parsing = require('parsing-csv')`

``` javascript
	var fs = require('fs');
	var Parsing = require('parsing-csv');

	var parsing = new Parsing('dummy.csv');
```
