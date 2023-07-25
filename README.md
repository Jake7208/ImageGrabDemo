# ImageGrabDemo
Are you interested in creating your very own gallery? If so, let's dive right in and get started on this rewarding endeavor!
Setting Up
Before we begin, there are a few prerequisites to ensure a smooth setup. Firstly, make sure you have Visual Studio Code and Node.js installed on your system.
Now that you have these essentials at your disposal, let's delve into the process. Begin by opening Visual Studio Code. Once you're inside the environment, follow the guided steps to create a successful REST API that seamlessly fetches images from a database.
Step One: Let's get started by accessing the terminal. You can do this either by using the keyboard shortcut ( Ctrl + ` ) or by navigating to the "View" menu at the top of Visual Studio Code and clicking on the "Terminal" button located near the bottom of the menu.
Your VS code should look a little something like this. To check if your node is working use the command:
node -v
Step Two: Great job on setting up the terminal! Now, let's dive into the exciting part – installing the necessary dependencies.  To do this, simply enter the following command in the terminal to get all the dependencies we need:
npm i cors dotenv express nodemon mongodb mongoose
“note: mongodb and mongoose are dependent on what database you’re using”
You should now have the following files and folders:

package-lock.json
package.json
node_modules 
To ensure that the dependencies were added successfully, let's examine the package.json file. Open it using Visual Studio Code or any text editor, and look for the following section:
“note: mongodb is just my preferred DB this one is dependent on your own personal preference”
Your dependencies should match the ones shown above.
Step Three: In the final step of the setup process, we'll organize the required files and folders. Start by creating the following elements within Visual Studio Code:

Create a folder named "images."
Create a file named "index.js., and .env"
Establish a "public" folder, which will be configured to fetch data from the backend in later steps.

This well-structured arrangement will lay the foundation for your project's functionality and pave the way for a smooth development journey.
If file path matches then you are now all set to move forward with your project.
Database Setup
I won't delve deeply into database setup in this documentation. However, if you are determined to complete this project without prior knowledge of database setup, you can click here to learn how to set up MongoDB on your computer. This essential step will enable seamless integration with the backend, empowering you to accomplish your project successfully.
Once your database is set up, simply add the ".env" file, which should work seamlessly if you have "dotenv" listed in your package.json dependencies. This file will handle environment variables and secure sensitive data, ensuring a smooth and secure development process.
Your .env will look something like this with your own DATABASE key. Now, let's proceed by incorporating this configuration into the "index.js" file, enabling your API to establish a connection with the database using mongoose and mongoDB:
We need to create an api folder for our schema call we’ll need a file called image.js with the following code: 
const PORT = pocess.env.PORT || 4000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");

const app = express();
app.use(cors());

// getting the database information from .env
const DB = process.env.DATABASE;

// connecting to the database
mongoose
.connect(DB, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => console.log("DB connection successful!"));

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});

const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
name: {
type: String,
required: true,
unique: true,
},
genre: String,
path: String,
image: String,
type: String,
licence: String,
});

const Image = mongoose.model("images", imageSchema);
module.exports = Image;

Now we’re ready to move on to the final steps!
What is Rest
If this doesn’t make sense to you don’t worry! You may skip this if you want to get back into building the Gallery
REST (Representational State Transfer) is a set of guidelines and principles used to design web services that allow different software applications to communicate and exchange data with each other over the internet. It provides a simple and standardized way for computers to interact, making it easier to access and manipulate data across various platforms and devices. RESTful APIs (Application Programming Interfaces) follow these principles, enabling seamless integration and interaction between web applications, ultimately contributing to the overall functionality and interconnectedness of the internet.
If you’re interested in learning more you can visit here
Creating Rest Request
In this final phase, we will create our initial REST request by setting up an Express router and obtaining the schema export for our index.
This is your Router!
// connections from api
const imagesRouter = require("./api/images");

app.use("/api/images", imagesRouter);
app.use(express.static("./images"));
Now let’s ensure our database connection, we’ll check by entering the terminal and running:
npm run start
If your terminal looks like this then you have successfully connected the database.
Now that you have successfully connected your router and ensured that your database is running, you are ready to make your first REST request. In this section, we will guide you through the process of setting up a basic req, res function to initiate a REST request.
Let’s get going we’re going to first do a get all using the imagesRouter to fetch these fields from the database
app.get("/api/getAll", async (req, res, next) => {
try {
const allImages = await imagesRouter.find(req.body);
res.json({ allImages: allImages });
} catch (err) {
console.log(err);
}
});
Essentially what this will do is Send an HTTP GET request to http://your-server-address/api/getAll.

Upon successful retrieval of images from the database, the server will respond with a JSON object containing the array of image objects under the "allImages" key.
To verify if the API endpoint is functioning correctly, you have two simple testing options: using Postman or your web browser.
Method 1: Using Postman
Open Postman (you can download it from https://www.postman.com/downloads/).
Set the request type to "GET."
Enter the URL http://localhost:4000/api/getAll.
Click the "Send" button to initiate the GET request.
Postman will display the server's response containing the JSON object with the array of image data under the "allImages" key.
Method 2: Using Your Web Browser
Ensure your server is up and running.
Open your preferred web browser.
In the address bar, type http://localhost:4000/api/getAll and press "Enter."
The browser will send a GET request to the specified endpoint.
The browser will display the JSON response from the server containing the image data.
Both methods should yield the same result, and you will receive a JSON object with the array of image data if the endpoint is correctly configured and your database connection is established.
Note: When using the browser to test API endpoints, the browser will typically format the JSON response in a user-friendly way, making it easier to read. However, for advanced testing and development purposes, Postman provides more extensive features and capabilities. Choose the method that best suits your testing needs.  If you were successful you should have json data that looks similar to this
Displaying an image
Congratulations on reaching the last step of the process! Now, we'll guide you on how to display your images on the frontend of your application.
Step 1: Prepare Your Public Folder
Begin by navigating to your project's "public" folder. Inside this folder, create two new files:
index.html: This file will serve as the main HTML page for your application.
script.js: This file will contain the JavaScript code responsible for fetching and displaying images on the frontend.
Step 2: Creating the index.html File
Open the index.html file using your favorite code editor. Use the ! shortcut with the emmet abbreviation to quickly generate the basic HTML structure. Next, add the necessary HTML elements to build the foundation of your app, including a placeholder div element to display the images dynamically.
Step 3: script.js - Fetching and Displaying Images.
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Demo For images</title>
<script src="script.js"></script>
</head>
<body>
<div class="gallery"></div>
</body>
</html>

function loadDom(array) {
const listElement = document.createElement("section");
listElement.className = "Gallery_Section";

const listItems = [];

array.forEach((image) => {
const listItem = document.createElement("a");
listItem.className = "Gallery_Item";
const imgElement = document.createElement("img");

imgElement.src = `.././images/${image.genre}/${image.name}`;

listItem.appendChild(imgElement);
listElement.appendChild(listItem);

listItem.addEventListener("click", () => {
console.log("Image clicked!"); // You can add your custom click event handling here
});

listItems.push(listItem);
});

const galleryDiv = document.querySelector(".gallery");

galleryDiv.appendChild(listElement);
}

window.onload = () => {
// Fetch all images and their data from the /api/getAll endpoint
fetch("http://localhost:4000/api/getAll")
.then((response) => response.json())
.then((objectData) => {
const imageArray = objectData.allImages; // Extract the array of images from the objectData
loadDom(imageArray); // Pass the array to the loadDom function
})
.catch((error) => {
console.error(error);
});
};

Complete!!!! 
Congratulations on completing the project! You've successfully built your very own image grabber, allowing you to fetch and display images dynamically. The core functionality is in place, and now it's time to add your personal touch to make it shine!
The next step involves styling your image gallery to create an appealing and visually captivating experience for your users. With the styling in place, your gallery will have a polished look, enhancing its overall presentation and user interaction.
Feel free to apply your creativity and design skills to customize the gallery's appearance to match your preferences and the overall theme of your application. Experiment with colors, layouts, fonts, and other CSS properties to create a unique and aesthetically pleasing display.
By adding your artistic flair, you'll turn your image grabber into a fully-fledged gallery that showcases your images in a professional and engaging manner. Enjoy the process of crafting your gallery and bringing your creative vision to life! Happy styling!  I also recommending adding a git ignore for your .env and node_modules.
