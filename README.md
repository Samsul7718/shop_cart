# 1.Project SetUp

### 1.1 Backend

  1.1.1 Create a folder open it with vscode . Now create another 2 folder inside main folder(frontend, backend)
  
  1.1.2 Open terminal and type cd/backend(select backend folder)
  
  1.1.3 Then type npm init and pass yes and enter,automatically install the package.json
  
  1.1.4 After that type npm i express(to create the express js)
  
  1.1.5 Then select backend and create a file named index.js
  
  1.1.6 inside the index.js we import express

      import express from "express"
      const app=express()
      app.get("/",(req,res)=>{
          res.send("Server is Ready to Serve")
      })
      const port =process.env.PORT || 3000

       app.listen(port,(req,res)=>{
           console.log(`Server running at http://localhost:${port}`) 
      })


   1.1.7 Now go to package.json inside script (update test into start)

      "script":{
        "start":"node index.js"
      },

   1.1.8 After main

       "type":"module",


   1.1.9 Now type in console: npm run start    (to run the backend)

        you will get a url where the server will be running 
        click on the link and check the server is running or not.


### 1.2 Frontend

  1.2.1 Open another terminal and select the frontend create frontend file using vite

      npm create vite@latest "app-name"
      select react and javascript then press enter

  1.2.2 Now run the project 

         npm run dev
         
1.2.3 After that frontend should running properly.
        

# 2.Project Description

### Shop.Cart – E-Commerce Application
 

Shop.Cart is a full-stack e-commerce web application built using React (Vite) for the frontend and Express.js for the backend.
The project demonstrates how to build a shopping cart system with product listing, cart management, and order placement 
functionality — without using a database (products are hardcoded for simplicity).

This project is designed as a learning/demo project for practicing React, Context API, localStorage, and Express API integration.

### Features

1. Product Listing – Fetch products from an Express API and display them in React.

2. Shopping Cart – Add/remove products, adjust quantity, and view total price.

3. Persistence with LocalStorage – Cart items remain saved even after refreshing the page.

4. Global State Management – Context API used for managing cart and auth states.

5. Backend API – Simple Express server with endpoints:

6. GET /api/products → returns a list of products

7. POST /api/order → accepts a list of product IDs and quantities, logs order details, and returns a success message

8. UI/UX – Responsive layout using Tailwind CSS.

### Tech Stack

Frontend: React (Vite), Tailwind CSS

State Management: Context API + localStorage

Backend: Express.js (Node.js), CORS enabled

Tools: Git, npm

### Clone the repository

git clone https://github.com/Samsul7718/shop_cart.git









        
