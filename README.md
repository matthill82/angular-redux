# Component based angular 1.6 app for UBS.

## Based on the requirements i've made decisions in favour of performance

### using ng-redux for state based application and a single store as rendering lists in angular uses too many watchers that trigger the $digest cycle upon change
### not using too many nested components, i've included an example of a nested component and could have created many more but this would have made the application more complex than it needed to be. 

#### installing the dependencies

```$xslt
run npm install or yarn install (prefer yarn as it's quicker and more stable)
```

#### mocking the api and checking for vulnerabilities within the packages, then running the build
       
```$xslt

    npm run start or yarn run start
    
    This command runs a security-check, then starts the mockapi as below and finally triggers the gulp command that handles all of the build process
  

  Loading client/app/api/db.json
  Loading client/app/api/routes.json

  Resources
  http://localhost:3001/country

  Other routes
  /api/ -> /
  /selectedCountries -> /selectedCountries
  /country/:country -> /country?q=:country

  Home
  http://localhost:3001

```

#### i've included simple tests but didn't have time to complete as much as i'd have liked to.
```$xslt
    yarn run test --watch
```




