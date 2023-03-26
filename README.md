# CrimeStats
<p>It is a tool that brings statistics about crimes occurred in Chicago. These stats are based in mathematics calculations, like monthly average, yearly average, growth rate, and total of crimes, in a especific period. This tool has been developing using Javascript with postgresql. This project is focused on get data from <a href="https://data.cityofchicago.org/resource/ijzp-q8t2.json">Chicago API</a>. If you want to use another dataset, go to section "<a href="#using-another-dataset">Using Another Dataset</a>".</p>



## Table of Contents
<ol id="menu" align="left">
 <li><a href="#requirements">Requirements</a> </li>
 <li><a href="#how-to-install">How To Install</a> </li>
 <li><a href="#how-to-use">How To Use</a> </li>
 <ol>
  <li><a href="#finding-types-of-crime">Finding Types of crimes</a></li>
  <li>Fill your database</li>
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
2. Set the param `:year` in url with the year that those crimes occured.
3. Request the url with HTTP method `GET`

* <strong>Tip:</strong> Use a software such as <a href="https://insomnia.rest/download">Insomnia</a> or <a href="https://www.postman.com/downloads/">Postman to make requests</a>

Example of request
```
 GET /fill-database/burglary/2020
```

## Using Another Dataset

## Project Status
<p></p>
