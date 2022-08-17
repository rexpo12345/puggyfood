function getRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    //This function will be called when data returns from the web api    
    request.onload = function () {
        //get all the movies records into our movie array        
        restaurant_array = JSON.parse(request.responseText);
        //Fetch the comments as well        
        console.log(restaurant_array) // output to console        
        //call the function so as to display all movies tiles for "Now Showing"        	
        displayRestaurants();
        
    };

    //This command starts the calling of the movies web api    
    request.send();
}



function displayRestaurants() {
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;
    var message = "";
    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        if (restaurant_array[count]._id > 0) {
            var testingid = restaurant_array[count]._id;
            console.log(testingid)
            var thumbnail = restaurant_array[count].restaurantImg;
            var title = restaurant_array[count].restaurantName;
            var location = restaurant_array[count].restaurantLocation;
            var foodCategory = restaurant_array[count].restaurantCategory;
            var rating = restaurant_array[count].restaurantRating;
            var price = restaurant_array[count].restaurantPrices;
            star ='';
            var cell = '<div class="col-md-5 mb-4">\
            <div class="card boxshadow">\
              <img src="'+ thumbnail +'" width="100%;" height="300px;" class="card-img-top" alt="...">\
              <div class="card-body ">\
              <h5 class="card-title">'+ title +'</h5>\
                <p class="card-text">Location: '+ location + '</p>\
                <p class="card-text">Category: ' + foodCategory +'</p>\
                <p class="card-text">Rating: '+ rating +' \
                </p>\
                <p class="card-text">Prices: '+ price+'\
                </p>\
                <p class="card-text text-left mb-2">\
                <button type="button" id="'+ testingid +'" class="btn btn-color px-5 mb-2 w-20 loginbtn border border-dark float-right" onclick="intorestinfo(this.id)" >Click here to see reviews\
                          </button>\
                    </p>\
              </div>\
            </div>\
            </div>'

           
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;
            
        }

    }

    message = restaurantCount + " Restaurants " ;
    document.getElementById("summary").textContent = message;
 
}

function restaurantID(click_id){
 
    console.log(click_id)
    sessionStorage.setItem("restaurantid",click_id); 
}

function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let star of stars){
        star.setAttribute("src", popcornBWImage);
    }
    changeStarimage(num, classTarget);
}


function changeStarimage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", starImage);
            rating = 5;
            break;
    }
}



function searchMe() {
    restaurantName = document.getElementById("userSearch").value; 
    restaurant_array = [];
    pattern = new RegExp("No restaurant yet");
    restaurant_url = "/searchRest/"+restaurantName;
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    request.onload = function (){
        restaurant_array = JSON.parse(request.responseText);
            console.log(restaurant_array);
            pattern = new RegExp(restaurantName, "i"); // "g" for global, "i" for case-insensitive          	
            displayRestaurants();
        };
    request.send();

}


// change id on session to fetch data to restaurant more info page
function intorestinfo(click_id) {
    
    console.log(click_id)
    sessionStorage.setItem("restaurantid",click_id); 
    
    restaurant_url = "/restaurantdetailsandinfo/"+ click_id;
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    request.onload = function (){
        restaurant_array = JSON.parse(request.responseText); 
        console.log(restaurant_array);
        window. location. replace("http://ec2-18-207-43-190.compute-1.amazonaws.com:8080/restaurant.html");    

        };
    request.send();
}

function filterLocation(elem) {
    
    var values = elem.value;
    console.log(values);
    restaurant_url = "/restaurantsLocation/" + values;
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    request.onload = function (){
        restaurant_array = JSON.parse(request.responseText); 
        console.log(restaurant_array);
       

        displayRestaurants();

        };
  
    request.send();
}

function filterCategories(elem) {
    
    var values = elem.value;
    console.log(values);
    restaurant_url = "/restaurantsCategories/" + values;
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    request.onload = function (){
        restaurant_array = JSON.parse(request.responseText); 
        console.log(restaurant_array);
       

        displayRestaurants();

        };
  
    request.send();
}

function filterStars(elem) {
    
    var num = elem.getAttribute("value");
    console.log(num);
    restaurant_url = "/restaurantsRating/" + num;
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    request.onload = function (){
        restaurant_array = JSON.parse(request.responseText); 
        console.log(restaurant_array);
       

        displayRestaurants();

        };
  
    request.send();
}

function filterPrices(elem) {
    
    var num = elem.getAttribute("value");
    console.log(num);
    restaurant_url = "/restaurantsPrices/" + num;
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    request.onload = function (){
        restaurant_array = JSON.parse(request.responseText); 
        console.log(restaurant_array);
       

        displayRestaurants();

        };
  
    request.send();
}
//change the filter dollar image accordingly
function priceIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // star images to use black and white.
    for (let s of stars) {
        s.setAttribute("src", priceBWImage );
    }
    changePricesImage(num, classTarget);
}

function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // star images to use black and white.
    for (let s of stars) {
        s.setAttribute("src", starBWImage );
    }
    changeStarsImage(num, classTarget);
}
