var loadingImg = "images/loading.gif";

// online image url
var imgUrl = ["https://i.pinimg.com/564x/0b/6a/01/0b6a0120beeb3032b4363fc88853177d.jpg",
    "https://i.pinimg.com/564x/02/05/a8/0205a849f9ca3e5f680a1f11b9d84f74.jpg",
    "https://i.pinimg.com/564x/69/d1/c0/69d1c01ece3036059ca660a225105bd1.jpg",
    "https://i.pinimg.com/564x/57/cd/e9/57cde9b47cdc5be4682c9b7e9e1cc843.jpg",
    "https://i.pinimg.com/564x/60/dd/95/60dd95fbb79fb6529beb80b1842fe727.jpg"];


//get html's elements
var previousButton = document.getElementById("previous"),
    imageDisplay = document.getElementById("display"),
    imageSource = document.getElementsByTagName("a"),
    nextButton = document.getElementById("next");


//initial state
var i = 0;
imageDisplay.setAttribute("src", imgUrl[i]);
previousButton.classList.add("disabled");
imageSource[0].innerHTML = imgUrl[i];
imageSource[0].setAttribute("href", imgUrl[i]);


//when the previous button was clicked
function previousImage() {
    i -= 1;
    if (i < 0) {
        //console.log("i = ", i);
        i = 0;
    } else {
        //console.log("i = ", i);
        nextButton.classList.remove("disabled");
        imageDisplay.setAttribute("src", imgUrl[i]);
        imageSource[0].innerHTML = imgUrl[i];
        imageSource[0].setAttribute("href", imgUrl[i]);
        if (i == 0) {
            previousButton.classList.add("disabled");
        }
    }
}


//when the next button was clicked
function nextImage() {
    i += 1;
    if (i > 4) {
        //console.log("i = ", i);
        i = 4;
    } else {
        //console.log("i = ", i);
        previousButton.classList.remove("disabled");
        imageDisplay.setAttribute("src", imgUrl[i]);
        imageSource[0].innerHTML = imgUrl[i];
        imageSource[0].setAttribute("href", imgUrl[i]);
        if (i == 4) {
            nextButton.classList.add("disabled");
        }
    }
}