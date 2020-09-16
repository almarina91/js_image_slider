let chair = {
    name: "Default",
    author: "Default",
    year: "Default",
    text: "Default",
    image: "Default"
}

let barcelonaChair = Object.create(chair);
barcelonaChair.name="Barcelona Chair";
barcelonaChair.author="Ludwig Mies van der Rohe";
barcelonaChair.year="1929";
barcelonaChair.text="The Rolex and Rolls-Royce of 20th-century chairs." +
    "                Designed to complement his German Pavilion for the 1929 International Exhibition in Barcelona, " +
    "                the chair was never intended to be mass-produced." +
    "                It was intended to just sit there looking fabulous at the Pavilion." +
    "                It did. It still does." +
    "                It's not all that comfortable, but it looks as stunning as any chair ever.";
barcelonaChair.image="images/barcelonachair.jpeg";

let B32Cesca = Object.create(chair);
B32Cesca.name = "B32/Cesca";
B32Cesca.author="Marcel Breuer";
B32Cesca.year="1928";
B32Cesca.text="Two important milestones in the history of modern furniture\n" +
    "                are Breuer's profoundly influential chairs: the Wassily and the B32/Cesca.\n" +
    "                Fascinated by bicycle handlebars, Breuer and Mart Stam used non-reinforced\n" +
    "                tubular steel to pretty much invent the 20th-century modern chair.\n" +
    "                Though the Wassily is more sculptural, more abstract and complicated,\n" +
    "                the B32/Cesca was the real game changer: It offered a comfortable bounce\n" +
    "                and seemed to float a human being on air.";
B32Cesca.image="images/cescab32breuer.jpg";

let loungeChair = Object.create(chair);
loungeChair.name="Lounge chair";
loungeChair.author="Charles & Ray Eames";
loungeChair.year="1956";
loungeChair.text="Lounge & Ottoman: If you really look, you'll see it's simply a luxurious\n" +
    "                progression of their earlier bent-plywood experiments—but with leather\n" +
    "                inserts and padding, swivels and tilts, sort of like a catcher's mitt\n" +
    "                inside a plywood shell. The Eames Lounge now epitomizes sexy midcentury\n" +
    "                executive style, masculinity, and comfort. The most collectible models are,\n" +
    "                like this one, vintage rosewood.";
loungeChair.image="images/eamesloungechair.jpg";

let grandComfort = Object.create(chair);
grandComfort.name="Grand Comfort";
grandComfort.author = "Le Corbusier";
grandComfort.year="1928";
grandComfort.text="Co-designed by Charlotte Perriand and Pierre Jeanneret,\n" +
    "                the Grand Confort is just a clever way to contain some cushions in an open frame.\n" +
    "                Or a “cushion basket,” as Corbu himself referred to it.\n" +
    "                With its chrome exoskeleton, the plush classic is the ultimate time-tripper:\n" +
    "                It channels the '30s and the '70s and whenever else people desired a pure and\n" +
    "                comfortable distillation of the International Style.";
grandComfort.image="images/lecorbusierchair.jpg";

let stackingChair = Object.create(chair);
stackingChair.name = "Stacking Chair";
stackingChair.author="Verner Panton";
stackingChair.year="1960";
stackingChair.text="The groundbreaking first single-form, single-material injection-molded chair\n" +
    "                that even stacks. Put it in any room, anywhere—it's never failed to look great.\n" +
    "                Designed around 1960 but not in full-scale production until 1968, it reeks of the\n" +
    "                Swinging '60s in all the right ways. Look closely at how Panton engineered it to\n" +
    "                keep its structural integrity.";
stackingChair.image="images/pantonstackingchair.jpg";

let tulipChair = Object.create(chair);
tulipChair.name="Tulip Chair";
tulipChair.author="Eero Saarinen";
tulipChair.year="1955";
tulipChair.text="A tectonic design shift occurred overnight when Saarinen revealed his\n" +
    "                attempt at a single-material, single-form chair, which blew up the\n" +
    "                notion that a chair had to stand on four posts. He had finally solved\n" +
    "                his long desire to clean up, as he called it, the “slum of legs.”\n" +
    "                The result was epic and also as majestically fluid and beautiful as, well, a tulip.";
tulipChair.image="images/saarinentulip.jpg";

let thonet209 = Object.create(chair);
thonet209.name = "Thonet 209";
thonet209.author="Michael Thonet";
thonet209.year="1900";
thonet209.text="One of the most crucial innovations in the time line of the modern chair is\n" +
    "                the invention of a process that allowed wood to be bent with steam.\n" +
    "                The importance of the curvilinear furniture masterminded and made by\n" +
    "                Michael Thonet and his company at the turn of the 20th century cannot be underestimated.\n" +
    "                Josef Hoffmann and Adolf Loos, among others, designed for Thonet, but the 209 armchair\n" +
    "                is the icon for modernists. Back when Le Corbusier was doing his avant-garde\n" +
    "                early architecture,\n" +
    "                what did he choose to put in almost all of his buildings? A Thonet 209 armchair.\n" +
    "                It was the only chair he felt was as modern as his architecture,\n" +
    "                and it still beguiles us to this day.";
thonet209.image="images/thonet209.jpg";

const chairsArray = [barcelonaChair,B32Cesca,loungeChair,grandComfort,stackingChair, tulipChair, thonet209];

let currentChairIndex = 0;
let currentChairImage= document.getElementById("chairImage");
let currentChairName = document.getElementById("chairName");
let currentChairAuthor = document.getElementById("chairAuthor");
let currentChairYear = document.getElementById("chairYear");
let currentChairText = document.getElementById("chairText");

function plusSlide() {
    currentChairIndex++;
    if (currentChairIndex < chairsArray.length) {
        currentChairImage.src= chairsArray[currentChairIndex].image;
        currentChairName.innerHTML = chairsArray[currentChairIndex].name;
        currentChairAuthor.innerHTML =  chairsArray[currentChairIndex].author;
        currentChairYear.innerHTML = chairsArray[currentChairIndex].year;
        currentChairText.innerHTML = chairsArray[currentChairIndex].text;

    } else {
        currentChairIndex = 0;
        currentChairImage.src = chairsArray[currentChairIndex].image;
        currentChairName.innerHTML = chairsArray[currentChairIndex].name;
        currentChairYear.innerHTML = chairsArray[currentChairIndex].year;
        currentChairText.innerHTML = chairsArray[currentChairIndex].text;
        currentChairAuthor.innerHTML =  chairsArray[currentChairIndex].author;

    }
    magnify("chairImage", 3);
}

function minusSlide() {
    currentChairIndex--;
    if ( currentChairIndex < chairsArray.length && currentChairIndex!== -1) {
        currentChairImage.src= chairsArray[currentChairIndex].image;
        currentChairName.innerHTML = chairsArray[currentChairIndex].name;
        currentChairAuthor.innerHTML =  chairsArray[currentChairIndex].author;
        currentChairYear.innerHTML = chairsArray[currentChairIndex].year;
        currentChairText.innerHTML = chairsArray[currentChairIndex].text;
    } else  {
        currentChairIndex = chairsArray.length-1;
        currentChairImage.src = chairsArray[currentChairIndex].image;
        currentChairName.innerHTML = chairsArray[currentChairIndex].name;
        currentChairYear.innerHTML = chairsArray[currentChairIndex].year;
        currentChairText.innerHTML = chairsArray[currentChairIndex].text;
        currentChairAuthor.innerHTML = chairsArray[currentChairIndex].author;
    }
    magnify("chairImage", 3);
}

document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        minusSlide();
    }
    else if (e.keyCode == '39') {
        plusSlide();
    }

}

function magnify(imgID, zoom) {
    let img, glass, w, h, bw;
    img = document.getElementById(imgID);

    glass= document.getElementsByClassName("slideImagesGlass")[0];
    if (glass !== undefined) {
        glass.style.backgroundImage = "url('" + img.src + "')";
        return;
    }
    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "slideImagesGlass");

    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);

    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
        let pos, x, y;
        /* Prevent any other actions that may occur when moving over the image */
        e.preventDefault();
        /* Get the cursor's x and y positions: */
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        /* Prevent the magnifier glass from being positioned outside the image: */
        if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
        if (x < w / zoom) {x = w / zoom;}
        if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
        if (y < h / zoom) {y = h / zoom;}
        /* Set the position of the magnifier glass: */
        glass.style.left = (x - w) + "px";
        glass.style.top = (y - h) + "px";
        /* Display what the magnifier glass "sees": */
        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }

    function getCursorPos(e) {
        let a, x = 0, y = 0;
        e = e || window.event;
        /* Get the x and y positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }
}

magnify("chairImage", 2);

//show and hide chair description


function showHideDescription () {
        let descriptionDisplay = document.getElementById("description");
        if (descriptionDisplay.style.display === "none") {

            descriptionDisplay.style.display = "block";
        } else {
            descriptionDisplay.style.display = "none";
        }

}

//copy to clipboard function

function copyToClipboard() {
    let element = document.getElementById("chairText");
    let elementText = element.textContent;
    copyText(elementText);
}

function copyText(text) {
    navigator.clipboard.writeText(text);
}





