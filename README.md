# Annie's Hard Rock Life

## Overview

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/A9iCeKx56DQ" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

### Routes
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | api/v1/ | Home Page w/ Directory |
GET | api/v1/music/ | index of All musical instruments |
GET | api/v1/music/:instrument | show page for selected imstrument type |
GET | api/v1/music/:instrument/:model | show page for specific instrument model |
GET | api/v1/music/new | page to add new instruments |
POST | api/v1/music/ | post instrument to DB |
GET | api/v1/music/:instrument/:model/edit | page to edit a specific instrument |
PUT | api/v1/music/:instrument/:model | edit/update an instruments |
DELETE | api/v1/music/:instrument/:model | Delete instruments from DB |

 ## Built With:
* JavaScript
* CSS
* React.js
* Express.js
* MongoDB

### Possible Updates:
* Search Bar
* Build-A-Band
   * Pick a combo of big 3 instruments
   * Guitar, Piano, Drums