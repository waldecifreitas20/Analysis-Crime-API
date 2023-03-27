# CrimeStats
<p>It is a tool that brings statistics about crimes occurred in Chicago. These stats are based in mathematics calculations, like monthly average, yearly average, growth rate, and total of crimes, in a especific period. This tool has been developing using Javascript with postgresql. This project is focused on get data from <a href="https://data.cityofchicago.org/resource/ijzp-q8t2.json">Chicago API</a>. If you want to use another dataset, go to section "<a href="#using-another-dataset">Using Another Dataset</a>".</p>



## Table of Contents
<ol id="menu" align="left">
 <li><a href="#requirements">Requirements</a> </li>
 <li><a href="#how-to-install">How To Install</a> </li>
 <li><a href="#endpoints">Endpoints</a> </li>
 
 <li><a href="#how-to-use">How To Use</a> </li>
 <ol>
  <li><a href="#finding-types-of-crimes">Finding Types of crimes</a></li>
  <li><a href="#fill-your-database">Fill your database</a></li>
  <li><a href="#searching-crimes-statistics-in-a-especific-year">Searching Crimes Statistics in a Especific Year</a> </li>
  <li><a href="#searching-crimes-statitics-in-all-years">Searching Crimes Statistics in All Years</a> </li>
 </ol> 
 <li><a href="#using-another-dataset">Using Another Dataset</a> </li>
 <li><a href="#project-status">Project Status</a> </li>
</ol>

## Requirements
<ul>
 <li><a href="https://nodejs.org/en/download">NodeJS</a> installed v16.13.0 or newer</li>
 <li><a href="https://git-scm.com/downloads">Git</a> installed v2.28.0 or newer</li>
 <li>NPM installed v8.19.0 or newer</li>
 <li><a href="https://www.postgresql.org/download/">Postgresql</a> installed
 <li>A code editor such as <a href="https://code.visualstudio.com/download">VSCode</a>
</ul>



## How to install
<ol>
 <li>Clone the project</li>
 
```
 git clone https://github.com/waldecifreitas20/CrimeStats.git
```
 <li>Install dependencies</li>
 
```
 npm install
```
 
 <li>Run...</li>
 
 ...in development enviroment
 
```
 npm run dev 
```
 ...in production enviroment
 
```
 npm start 
```
 
</ol>

## Endpoints

 * ``GET`` ``/fill-database/:type/:year``: Use this route to fill your database. It must be access at least once before others routes. 
 * ``GET`` ``/crimes/in/:year`` : Use this to search stats in a especific year 
 * ``GET`` ``/crimes/all`` : Use this to search stats about all data into your database
 
 <p></p>

## How to Use
### Finding Types of crimes
Before you get data from <a href="https://data.cityofchicago.org/resource/ijzp-q8t2.json">Chicago API</a>, you must know which type of crime you want. To make this process easy, execute the file ``crime_type_finder.js``:

```
 node crime_type_finder.js
```

You will get a result like this:

```javascript
{
    "WEAPONS VIOLATION",
    "OTHER OFFENSE",
    "BATTERY",
    "THEFT",
    "CRIMINAL DAMAGE",
    "MOTOR VEHICLE THEFT",
    "ASSAULT",
    "OFFENSE INVOLVING CHILDREN",
    "ARSON",
    "ROBBERY",
    "DECEPTIVE PRACTICE",
    "BURGLARY",
  }
```

### Fill your database
1. Set the param `:type` in url with the type of crime you want to fill into your database.
2. Set the param `:year` in url with the year that those crimes occurred.
3. Request the url with HTTP method `GET`

* <strong>Tip:</strong> Use a software such as <a href="https://insomnia.rest/download">Insomnia</a> or <a href="https://www.postman.com/downloads/">Postman to make requests</a>

Example of request
```
 GET /fill-database/burglary/2020
```

### Searching Crimes Statistics in a Especific Year
* The base route provides stats of all crimes occurred in given year. There is below a example of request:
```
 GET /crimes/in/2020
```
...you will get a result like this:
```json
 {
	"status": 200,
	"results": 88325,
	"year": "2020",
	"period": {
		"start": "01",
		"end": "12"
	},
	"crimes": {
		"CRIMINAL SEXUAL ASSAULT": {
			"total": 1159,
			"first_month": 98,
			"last_month": 76,
			"monthly_average": 96.58,
			"growth_rate": -22.45
		},
		"ROBBERY": {
			"total": 7856,
			"first_month": 726,
			"last_month": 565,
			"monthly_average": 654.67,
			"growth_rate": -22.18
		},
		"HOMICIDE": {
			"total": 767,
			"first_month": 33,
			"last_month": 55,
			"monthly_average": 63.92,
			"growth_rate": 66.67
		},
		"ASSAULT": {
			"total": 18254,
			"first_month": 1519,
			"last_month": 1275,
			"monthly_average": 1521.17,
			"growth_rate": -16.06
		},
		"THEFT": {
			"total": 41304,
			"first_month": 4602,
			"last_month": 2919,
			"monthly_average": 3442,
			"growth_rate": -36.57
		},
		"PROSTITUTION": {
			"total": 277,
			"first_month": 38,
			"last_month": 4,
			"monthly_average": 23.08,
			"growth_rate": -89.47
		},
		"BURGLARY": {
			"total": 8755,
			"first_month": 740,
			"last_month": 549,
			"monthly_average": 729.58,
			"growth_rate": -25.81
		},
		"MOTOR VEHICLE THEFT": {
			"total": 9953,
			"first_month": 668,
			"last_month": 911,
			"monthly_average": 829.42,
			"growth_rate": 36.38
		}
	}
}
```

* You can also search for crimes occurred in a especific month making this request:
```
 GET /crimes/in/2019?month=01
```
<strong>Obs:</strong> ``month`` need to be send following the standard XX. Ex: 04,09,10,12.

...your result will be something like this:
```json
{
	"status": 200,
	"results": 7246,
	"year": 2022,
	"month": 1,
	"crimes": {
		"CRIMINAL SEXUAL ASSAULT": 108,
		"ROBBERY": 685,
		"HOMICIDE": 50,
		"ASSAULT": 1318,
		"THEFT": 3377,
		"PROSTITUTION": 22,
		"BURGLARY": 578,
		"MOTOR VEHICLE THEFT": 1108
	}
}
```

* On the other hand, you can search stats during a period of months:
```
 GET /crimes/in/2022?start_month=02&&end_month=10
```
...as result:

```json
{
	"status": 200,
	"results": 86940,
	"year": 2022,
	"period": {
		"start": "02",
		"end": "10"
	},
	"crimes": {
		"HOMICIDE": {
			"total": 514,
			"first_month": 41,
			"last_month": 62,
			"monthly_average": 57.11,
			"growth_rate": 51.22
		},
		"THEFT": {
			"total": 41896,
			"first_month": 3314,
			"last_month": 5054,
			"monthly_average": 4655.11,
			"growth_rate": 52.5
		},
		"BURGLARY": {
			"total": 5672,
			"first_month": 510,
			"last_month": 693,
			"monthly_average": 630.22,
			"growth_rate": 35.88
		},
	}
}
```


* If want to see stats about only one type of crime request this:
```
 GET /crimes/in/2022?type=burglary
```

...you will get as result:
```json
{
	"status": 200,
	"results": 7626,
	"year": 2022,
	"period": {
		"start": "01",
		"end": "12"
	},
	"crimes": {
	"BURGLARY": {
			"total": 7626,
			"first_month": 580,
			"last_month": 696,
			"monthly_average": 635.5,
			"growth_rate": 20
		},
	}
}
```

* You can search only crimes occured in domestic enviroment:
```
 GET crimes/in/2022?domestic=true
```
...your result:
```json
{
	"status": 200,
	"results": 8004,
	"year": "2020",
	"period": {
		"start": "01",
		"end": "12"
	},
	"crimes": {
		"CRIMINAL SEXUAL ASSAULT": {
			"total": 229,
			"first_month": 12,
			"last_month": 16,
			"monthly_average": 19.08,
			"growth_rate": 33.33
		},
		"HOMICIDE": {
			"total": 52,
			"first_month": 4,
			"last_month": 3,
			"monthly_average": 4.33,
			"growth_rate": -25
		},	
		"BURGLARY": {
			"total": 192,
			"first_month": 7,
			"last_month": 13,
			"monthly_average": 16,
			"growth_rate": 85.71
		},
	}
}
```

* Then, you can mix all those params at the same url:
```
 GET /crimes/in/2020?start_month=02&&end_month=10&&type=robbery&&domestic=true 
```

...your result:

```json
{
	"status": 200,
	"results": 5810,
	"year": "2020",
	"period": {
		"start": "02",
		"end": "10"
	},
	"crimes": {
		"ROBBERY": {
			"total": 5810,
			"first_month": 637,
			"last_month": 756,
			"monthly_average": 645.56,
			"growth_rate": 18.68
		}
	}
}
```

### Searching Crimes Statistics in All Years
* The base route provides stats of all crimes saved into the database. There is below a example of request:
```
 GET /crimes/all
```
...as result:

```json
{
	"status": 200,
	"period": {
		"start": "2019",
		"end": "2022"
	},
	"stats": {
		"total_crimes": 391093,
		"first_month": 30145,
		"last_month": 38032,
		"yearly_average": 97773.25,
		"monthly_average": 9777.33,
		"growth_rate": 26.16
	}
}
```

* You can set a period of year to get results more especifics.
```
 GET /crimes/all?initial_year=2020&&final_year=2022
```
...as result:

```json
{
	"status": 200,
	"period": {
	"start": "2020",
	"end": "2022"
	},
	"stats": {
		"total_crimes": 279490,
		"first_month": 21833,
		"last_month": 28493,
		"yearly_average": 93163.33,
		"monthly_average": 9316.33,
		"growth_rate": 30.5
}
}
```


## Using Another Dataset
If you are not interesting to use data coming from Chicago, you can use another one. Go to file `app/repositories/any_api_repository.js` and make the changes required. Those steps will allow you to use any dataset without make many changes. Follow the steps bellow:

1. Replace the variable `URL` for your dataset url.
```javascript
const URL = "https://mydataset.com/api/data.json"
```
3. Replace atributes at ``formatCrimeData`` returning. The atributes must be the same the as your dataset.
```javascript
return {
    type: crime.type,
    year: crime.date.year,
    month: crime.date.month,
    domestic: false,
    case_id: crime.id
}
``` 
3. Go to file externals.js
4. Replace this line:
```javascript
   const CRIMES_API = require("../repositories/chicago_api_repository");
```
...for this:
```javascript
   const CRIMES_API = require("../repositories/any_api_repository");
```
5. Follow the instructions at <a href="#fill-your-database">here</a>
6. It is done!


## Project Status
This project development is stopped for a while.
<p></p>
