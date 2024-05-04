# Angular-XYZCars

![NodeJS](https://img.shields.io/badge/Node.js-18.12.1-43853D)
![AngularCLI](https://img.shields.io/badge/AngularCLI-14.2.9-DD0031)

This is a basic Angular application for XYZ Cars dealership company, designed to showcase their cars for sale. The application includes features such as displaying a welcome message, listing cars on sale, and showing details of a selected car.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- Angular CLI: Install globally via npm by running `npm install -g @angular/cli`

## Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install project dependencies.

## Running the Application

To run the application locally, follow these steps:

1. Run `ng serve --open` in the terminal.
2. The application will open in your default web browser. If not, navigate to `http://localhost:4200/` in your browser.

The application will automatically reload if you change any of the source files.

## Usage

1. Click on the "View Car Listing" button in the Welcome screen.
2. Explore cars listed for sale.
3. Click on a car to view its details.

## Screenshots

Welcome Screen

![Welcome Screen](https://github.com/sycDev/angular-xyzcars/assets/33170649/934000c4-7d9e-40cc-a864-d65115c311a2)

List of Cars Screen

![List of Cars Screen](https://github.com/sycDev/angular-xyzcars/assets/33170649/76d54bfd-2a9b-4da7-9963-1b7cd19d3e5c)

Car Details Screen

![Car Details Screen](https://github.com/sycDev/angular-xyzcars/assets/33170649/82d92cfd-7ea4-4f44-909b-6132f1400992)

## Generating Angular Components

To generate Angular components using Angular CLI, use the following command:
`ng generate component componentName`

Replace `componentName` with the name of the component you want to generate.

## Components

- WelcomeComponent: Displays a welcome message "Welcome to XYZ Cars..."
- Cars: Lists the cars on sale
- CarDetails: Displays details of a selected car

## Routes

The application is configured with the following routes:

- `/`: Displays the welcome screen.
- `/cars`: Lists cars available for sale.
- `/detail/:id`: Displays details of a specific car.

## Custom Service

A custom service is created to provide test car data. The service includes fields such as id, make, model, year, desc, and photo. Components subscribe to this service to fetch car data.

## Conclusion

This Angular application provides a basic framework for XYZ Cars dealership to showcase their cars for sale. It includes features such as listing cars, displaying details, and a welcoming message. Further enhancements and customization can be made as per business requirements.
