const images = [
    "https://images.pexels.com/photos/2062551/pexels-photo-2062551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3874330/pexels-photo-3874330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

const img = document.querySelector("img");
const image_box = document.querySelector('div');

count = 0;

img.src=images[0];

function rightBtn() {
    img.className= "fadeOut"; 
    count+=1;

    setTimeout(function(){
        if (count< images.length){
            img.className = "";
            img.src= images[count];
        } else {
            count = 0;
            img.className = "";
            img.src= images[count];
        }
    },500);
}

function leftBtn(){
    img.className= "fadeOut"; 
    count-=1;
    setTimeout(function(){
        if (count>=0) {
            img.className = "";
            img.src= images[count];
        } else {
            img.className = "";
            count = (images.length - 1);
            img.src= images[count];
        }
    },500);
}


