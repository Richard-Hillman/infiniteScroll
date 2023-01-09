// require("dotenv").config();
<script src=".env"></script>
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// unsplash api 
const quantity = 30;
const apiUrl='https://api.unsplash.com/photos/random/?client_id=' + {API_KEY} + '&quantity=' + {quantity};

// get photos from unsplash API

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray)
    } catch (error) {
        //error 
    }
};

getPhotos();
