canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_img = "car1.jpg";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_img = "car2.jpg";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    car1_imageTag = new Image();
    car1_imageTag.onload = uploadcar1;
    car1_imageTag.src = car1_img;

    car2_imageTag = new Image();
    car2_imageTag.onload = uploadcar2;
    car2_imageTag.src = car2_img;
}

function uploadBackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imageTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '37'){
        car1_left();
        console.log("left");
    }

    if(keyPressed == '39'){
        car1_right();
        console.log("right");
    }

    if(keyPressed == '65'){
        car2_left();
        console.log("left");
    }

    if(keyPressed == '68'){
        car2_right();
        console.log("right");
    }
    
}

function car1_left(){
    if(car1_x>=0){
        car1_x -= 10;
        console.log("When left arrow is pressed = " + car1_x + " - " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right(){
    if(car1_x<=700){
        car1_x += 10;
        console.log("When right arrow is pressed = " + car1_x + " - " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left(){
    if(car2_x>=0){
        car2_x -= 10;
        console.log("When left arrow is pressed = " + car2_x + " - " +car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right(){
    if(car2_x<=700){
        car2_x += 10;
        console.log("When right arrow is pressed = " + car2_x + " - " +car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}


