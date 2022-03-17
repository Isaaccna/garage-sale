# Garage Sale

## Description

Garage Sale is a website where a user can upload, price, categorize and sell personal products. Buy and sell your items online with a virtual garage sale! Clear out the clutter in your garage, or shop around online to see what other users are selling!

**Heroku deployment:**
https://garage-sale-heroku.herokuapp.com/

**GitHub repository:**
https://github.com/Isaaccna/my-junk

## Motivation

To create a secure website to personally post and sell items of value.

## User Story
```
AS A user,
I WANT a website,
SO THAT I can buy/sell my personal belongings.
```

## Table of Contents

- [Garage Sale](#garage-sale)
  - [Description](#description)
  - [Motivation](#motivation)
  - [User Story](#user-story)
  - [Table of Contents](#table-of-contents)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Screenshots](#screenshots)
  - [Credits](#credits)
  - [Roadmap](#roadmap)

## Technologies

- React/Router/DOM
- Apollo Client/Server Express
- Bcrypt
- Express.js
- GraphQL
- JWT
- Mongoose
- MongoDB

## Installation

Clone the repository with HTTPS:
```
git clone https://github.com/Isaaccna/my-junk.git
```

or SSH:
```
git clone git@github.com:Isaaccna/my-junk.git
```

In a separate terminal, start the MongoDB database:
```
mongod
```

Navigate to the root of your project directory and install the node packages:
```
npm run install
```

Seed the database:
```
npm run seed
```

## Usage

Run the application normally:
```
npm run start
```

Run the application in development mode:
```
npm run develop
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Tests

Tests will be updated and included here in future developments.

## Screenshots


![Garage Sale banner](/client/public/images/garage-sale-banner.PNG)


## Credits

[Isaac Andrade](https://github.com/Isaaccna)
[Preston Foote](https://github.com/pwfoote)
[Patrick Hopps](https://github.com/phopps)


## Roadmap

Future developments include:
- Users can upload profile picture images
- Users can upload product images
- Seller page containing all of their products for sale
- User friend lists
- Star ratings for products
- Integrated Stripe payment platform