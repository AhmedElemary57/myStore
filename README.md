MyStore

This is an application of a simple store online site where you have products and you can add the product to your cart and view the product details and complete the payment to buy the product.

## Consist of angular:
•   Modules
•   Components
•   Templates
•   Directives
•   Services
•   Dependency Injection

## Explanation
-   I have used services to achieve dependency injection
-   Components and Templates are binded together by two types of data bindings:- Property Binding and Event Binding. Property binding ([] or {{}}) takes the value from component to DOM (Document Object Model) and Event Binding (()) takes the value from DOM to the component. Bindings can also be defined between parent and child components.
-   Its main building blocks are components and templates which make up views. So instead of navigating through pages, angular router service navigate through views.
-   Angular Modules register all modules, components and providers which are needed by angular app 
## Main components 
-   Productlist:
this component corresponds to the main page it contains all products available 
rout link "http://localhost:4200/"
-   ProductDetails:
this component has all information about the product that you have chosen rout link "http://localhost:4200/details".
-   CartComponent:
this component has all products that you added to your cart rout link "http://localhost:4200/cart"
## User Guide 
-   When you start the app you will see the initial page which consists of all products available on our server.
-   You have the availability to select the product quantity and add that product to your cart.
-   The product image is a like that navigates you to the product details page where you can see all information available on our server about that product.
-   In the cart page you can still change the amount of product and delete it also, NOTE if you insert the amount 0 the product will be removed.
-   The form to complete the payment has some requirements to submit it successfully and it gives you feedback of what is the invalid input that you entered 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component name to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


