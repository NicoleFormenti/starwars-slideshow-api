let slideIndex = 1;
showSlides(slideIndex);
function otherSlide(n) {
    showSlides(slideIndex += n);
}
function thisSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow");
    // conditional needed to get back to slide 1 when you click on next while on slide 4
    if (n > slides.length) {
        slideIndex = 1 // which means if >4 then back to 1
    }
    // slides are at this point showing together so we need a for loop
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'; 
    }
    slides[slideIndex-1].style.display = 'block';
}

// fetch planet infos from SWAPI
fetch('https://swapi.dev/api/planets/1')
            .then(function(response) {
            return response.json();
            }) 
            .then(function(data) {
                const tatooine = data; // storing the data in a variable
                document.getElementsByClassName('planet-name')[0].innerHTML = tatooine.name;
                document.getElementsByClassName('planet-climate')[0].innerHTML = tatooine.climate;
                document.getElementsByClassName('planet-population')[0].innerHTML = tatooine.population;
                document.getElementsByClassName('planet-terrain')[0].innerHTML = tatooine.terrain;
            });

/*const images = [
    'https://live-production.wcms.abc-cdn.net.au/d836d9cddfc48d2e90fb1aeaf9836b87?impolicy=wcms_crop_resize&cropH=567&cropW=1008&xPos=128&yPos=0&width=862&height=485',
    'https://media.cntraveler.com/photos/5727696bb161ad8b31235293/16:9/w_2560%2Cc_limit/GettyImages-143687829-tunisia.jpg',
    'https://mickeyblog.com/wp-content/uploads/2021/04/starwars-tatooine-city.jpg',
    'https://lumiere-a.akamaihd.net/v1/images/tatooine-main_1633e73f.jpeg?region=164%2C0%2C953%2C536' 
];
                     
const image1 = document.getElementById('image_one');
const image2 = document.getElementById('image_two');
for (let i = 0; i < images.length; i++) {
        const img = document.createElement('img');
        img.src = images[0];
        image1.appendChild(img);
        display.innerHTML(image1);
        image2.appendChild(img[1]);
        display.innerHTML(image2);
        } */
            




            