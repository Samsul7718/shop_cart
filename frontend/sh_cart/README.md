# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

1.Project setup

1.1 Create a folder and open it with your VsCode platform.

1.2 Create two sub-folder (frontend & backend) inside the main folder.

1.2 First go with backend folder and setup.

    1.2.1 Open terminal and select the backend folder (cd backend),install dependencies (npm init), now install express(npm i express) 

    1.2.2 Now create a file inside backend with (.js), where you can write your backend server code. 
    
    1.2.3 Where you clearly define the server PORT and the create all get function.
    
     import express from 'express' 
     const app=express() PORT =5000 
     //bellow code run in server and display the value
      app.get('/',(req,res)=>{ 
        res.send("Backend Server is ready") 
        }) 
        //bellow code run in vscode backend terminal 
        app.listen(port,()=>{ 
            console.log('Server run at http://localhost:${port}') 
            }) 
            now check the backend server is running in terminal

    1.2.4 Now create a product file where all product is present with(id,name,price,image),And import the file in main backend file.

1.3 Then go with frontend folder and setup.

   1.3.1 create forntend useing: npx create-react-app "app-name" or using vite: npm create vite@latest "app-name" 

   1.3.2 Then run the frontend in terminal using npm start or npm run dev(ckeck which on you are using) 

   1.3.3 now create your needy folder and file. 

1.4 to connect backend to frontend install cors

1.5 Then fetch the backend api as useal and check its working or not.