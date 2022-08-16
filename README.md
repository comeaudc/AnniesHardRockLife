# Annie's Hard Rock Life
A website for Musicians by Musicians. Built for Per Scholas to demonstrate knowledge and understanding of backend development.

### Overview
- [Link to the Deployed App](https://annies-hrl.herokuapp.com/)
- [Link to a Website Overview Video](https://youtu.be/FJK4IEex-jE)

### API Reference
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | / | Home Page w/ Directory |
GET | /api/v1/music/ | Index of All musical instruments |
GET | /api/v1/music/new | Page to add new instruments |
POST | /api/v1/music/ | Post instrument to DB |
GET | /api/v1/music/cart | Page to view shopping cart |
POST | /api/v1/music/cart/ | Post route to create shopping cart items |
GET | /api/v1/music/:instrument | Show page for selected imstrument types |
GET | /api/v1/music/:instrument/:model | Show page for specific instrument model |
DELETE | /api/v1/music/cart/:id | Delete Items from Shopping Cart |
DELETE | api/v1/music/:instrument/:model | Delete instrument from DB |
GET | /api/v1/music/:instrument/:model/edit | Page to edit a specific instrument |
PUT | /api/v1/music/:instrument/:model | Edit/update an instruments |

### Built With:
* JavaScript
* CSS
* React.js
* Express.js
* MongoDB

### Future Updates:
* Search Bar
* Checkout Button w/decrementing function
* Build-A-Band
   * Pick a combo of big 3 instruments
   * Guitar, Piano, Drums

## Authors:
- [Dylan Comeau](https://github.com/comeaudc/)

## Acknowledgements
- [Pictures & Instrument Descriptions](https://www.guitarcenter.com/)