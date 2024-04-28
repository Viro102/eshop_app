# Introduction

This is a full-stack e-commerce web app, utilizing ReactJS FE and ExpressJS BE with MariaDB

This app follows **MVC** and **SPA** architecture, which means delegating routing and rendering to client-side and only using backend as an API for fetching data. The whole app is containerized in docker.

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=ts,express,react,tailwind,vite,mysql,docker" />
  </a>
</p>

# Current Features

* Front page with products
  * Product details page
  * Rating of products
* User management pages
  * Log in page
  * Sign up page
  * Account summary page
* Scuffed sidebar
* Theme switch
* Simple order tracking system
  * Checkout page
  * Cart contents

# WIP Features

* Improve form validation
* Search function
* Product categories

# To run it yourself
Clone the repo:

```
git clone https://github.com/Viro102/eshop_app.git
```
To run you need to have docker installed:

```
cd ./eshop_app
docker-compose up --build -d
```

Then the website should be up on http://localhost:5173
