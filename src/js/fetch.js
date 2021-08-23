const frames = document.getElementsByClassName("ad__frame");
const url = "https://dog.ceo/api/breeds/image/random";

function getRandomImage() {

    // we are using fetch api to make rest api calls. you can use also axios or ajax.
    // we are also using promises here. 
    fetch(url)
        .then(function (response) {
            // we get raw response. need to first convert it into json format so we can use the data easily
            return response.json();
        })
        .then(function (json) {
            // now we got the json . we can use this to update any data in html 
            var imageUrl = json.message;
            
            for (let index = 0; index < frames.length; index++) {
                frames[index].setAttribute("src", imageUrl)
            }
            
        })
        .catch(function (error) {
            // if any error occurs like no internet connection then this callback will be called
            console.log(error);
        });
}

getRandomImage();


