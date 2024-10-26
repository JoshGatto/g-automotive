# G Automotive React Technical Test

## Project Overview

This project is a React-based responsive web application created as part of a technical test for a Junior Software Developer position. It showcases a banner and card layout with interactive features, demonstrating proficiency in React, SCSS, component architecture, and state management.

## Live Demo

[View the live demo here](https://g-automotive-nine.vercel.app/)

## Features

- Responsive design for both desktop and mobile views
- Custom-built components without relying on external UI libraries
- Interactive card selection with dynamic border highlighting
- SCSS styling with attention to detail in padding, border radius, box shadow, and overlays
- State management for card selection
- Accessibility considerations throughout the application

## Technology Stack

- React (Create React App)
- SCSS for styling
- Context API for state management

## Project Structure

The project is organized into the following main components:

- `App`: The main container component
- `Hero`: The banner component at the top of the page
- `CardContainer`: Manages the layout and state of the cards
- `Card`: Individual card component, further broken down into:
  - `CardImage`
  - `CardHeader`
  - `CardBody`
  - `Button`

## Getting Started

To run this project locally:

1. Clone the repository:
git clone https://github.com/JoshGatto/g-automotive.git

2. Navigate to the project directory:
cd g-automotive

3. Install dependencies:
npm install

4. Start the development server:
npm start

5. Open [https://g-automotive-nine.vercel.app/](https://g-automotive-nine.vercel.app/) to view it in the browser.

## Additional Implementations

Beyond the basic requirements, I've also included:

- Error boundaries for robust error handling
- Lazy loading of card components for improved performance
- Extensive accessibility features, including proper ARIA attributes and keyboard navigation
- Optimized images for faster loading times
