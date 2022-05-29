## 13 Object-Relational Mapping (ORM): E-Commerce Back End

# Task
Internet retail, also known as e-commerce, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.
Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.
Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria being met. You’ll need to submit a link to the video and add it to the readme of your project.

# User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

```

# Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

```

# Walk Through

<b> How to create the schema from the MySQL shell <b>

https://user-images.githubusercontent.com/81389441/170869879-b548ef8d-5773-4302-8668-205116f717dd.mp4


<b> How to seed the database from the command line <b>

https://user-images.githubusercontent.com/81389441/170869958-37030bf1-70f9-4b55-9efa-c1a643eb90e3.mp4


<b> How to start the application’s server. <b>
  
https://user-images.githubusercontent.com/81389441/170870014-5af729f3-e412-4377-bfff-0bd85a929522.mov



GET routes for all categories, all products, and all tags being tested in Insomnia.
  
GET routes for a single category, a single product, and a single tag being tested in Insomnia

POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia.

<b> Category <b>

https://user-images.githubusercontent.com/81389441/170870158-9ea7d53d-0a58-4d9f-b9e4-e1c61be931f2.mp4


<b> Tags <b>
  
https://user-images.githubusercontent.com/81389441/170870237-b1dc03df-88c3-416e-a435-3bae601d4414.mp4


<b> Product <b>



