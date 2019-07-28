# friendManager
Angular with Angular Material (8.1.1)

git URL: 'https://github.com/SEYOUN-LIM/friendManager'

To begin with,

Clone or download the project.

This app is using google maps, so please change `src/environments/environment.ts` files `googleApiKey` field, I will add the api key to the email.

At command line interface, Run `CD .\friendManager\` -> `npm i` -> `ng serve`, Navigate to `http://localhost:4200`

1. sketch and plan
-- I wanted to include actual code test's concept such as, data & event binding, and using directives
-- so, I made a similar concept of small web app. but more diverse angular's concepts.

2. check material latest version, current 8.1.1, git initial commit
-- the reason why I checked Angular Material version first is to make sure compatibility of integration.
-- as front-side tech grow, setting and configuration of front-end environtment is getting complicated.

3. create new project version 8.1.1 to match with Angular material (option: angular routing & SCSS)
-- I have solid understanding of front-end side skills which include html, css (sass)
-- Mostly commercial environment is using UI framework, for efficiency (to save time I think) such as bootstrap, Angular Material.
-- but, solid css skill will definetly provide huge benefits to the project, I beileve.
-- reading documentation skill (related to follwoing exact instruction)

4. install Angular Material and module separation 
-- ref : 'https://material.angular.io/guide/getting-started'
-- I like separate of concerning concept, plenteous material modules can give complexity to main module 

5. generating components
-- angular command line interface familiarity

6. decorating navigation components and routing
-- additional angular feature from actucal test.

7. MockUp friend list page, created friend model
-- benefit of using typescript

8. adding more functions to friend list table ( removing seleted function, filter, pagination)
-- to show ability of reading documentation and dealing libraries

9. adding creating item function using stepper
-- object and array data handling, using form

10. moving mockup data to new service file
-- also seperate of concern, depedency injection

11. decorating mockup detail page, add get function to service
-- expanding material elements

12. add google map to detail page using agm/core lib, 
-- I fetched the coordinate using google place api and geometry information with given address
-- used angular life cycle to fetch additional information.
-- ref : 'https://angular-maps.com/guides/getting-started/'

13. add google address autocomplete to creating new friend's address input field
-- continu implementing 3rd party libs, User experience
-- ref : 'https://www.npmjs.com/package/@angular-material-extensions/google-maps-autocomplete#installation'