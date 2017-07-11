Peter Search Demo - allows user to search Flickr photos by specific words



Step 1:  Clone the repository form github
      
$ git clone https://github.com/petrican/Peter.git

Step 2: Change dir to Peter app

$ cd Peter

Step 3: Run 'npm install'

$ npm install

Step 4: Sit back and relax while npm packages installing :)

Step 5: Once npm packages are all installed you should setup local config

$ cat config.js.sample > config.js

Step 6: Edit the config.js in your prefered editor . I use vim so

$vim config.js

Do add your FlickrAPI key. You can obtain a free one from <a href="https://www.flickr.com/services/api/misc.api_keys.html">https://www.flickr.com/services/api/misc.api_keys.html</a>

Once you have it replace the XXXXXXXXXXXXXXXXXXXXXXXXXX with the actual FlickrAPIKey you receive.

Save.

Step 7: run build

$ gulp build


Step 8: 

Run 'nodemon' in the directory. If you don't have that installed install it first with 

$ npm install -g nodemon

then run

$ nodemon

Step 9: At this stage the app should be running on your http://localhost:3000/ so open your browser and point it to this address.

Step 10: Input some search string like 'bike' then hit the 'Search' button. Scroll ..., click on an image ..aso.

Enjoy !


-----------















