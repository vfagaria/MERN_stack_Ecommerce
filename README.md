#MERN Stack E-commerce Website
This repository contains a full-stack E-commerce website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The website allows users to browse products, add them to the cart, place orders, and perform other typical E-commerce functionalities.

##Website Link
You can access the live version of the website at https://troubled-hospital-gown-tuna.cyclic.app/.

##Features
-User authentication and registration
-Product browsing and search functionality
-Product categorization and filtering
-Shopping cart management
-Checkout process with order placement
-User profile management
-Admin panel for managing products, orders, and users

##Technologies Used
###Front-end:

-React.js
-HTML5
-CSS3
-Bootstrap

###Back-end:

-Node.js with Express.js (server framework)
-MongoDB (database)
-Mongoose (MongoDB object modeling)
-JSON Web Tokens (JWT) for authentication

##Installation
1. Clone the repository:
  git clone https://github.com/your-username/e-commerce-website.git

2. Install dependencies for the client and server:
  cd e-commerce-website
  npm install       # Install client dependencies
  cd server
  npm install       # Install server dependencies

3. Set up the environment variables:
  Create a .env file in the server directory.
  Specify the required environment variables in the .env file, such as MongoDB connection URI, JWT secret key, etc.

4. Run the development server:
  In the root directory, run npm run dev to start both the client and server concurrently.
  The website will be accessible at http://localhost:3000
