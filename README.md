# lotr
example repo to supplement the article "A Function's Tale"

When I started creating vanilla JavaScript at my coding bootcamp, one lesson that proved crucial for me was the idea of creating a "wish-list" function: one function to rule them all, one function to find them, one function to invoke them all, and in the dark mode setting of VS Code, bind them.
In the example I am using, our "wish-list" function will consist of fetching from an API and then iterating before we call 2 functions, and finally end off with an event listeners.

The first part of the wish-list function was to fetch data from an API. That's shown below.
However, we also needed a second .then, since we want to display that json data from the array and work with it. The 2nd .then is grabbing a variable of data and going to iterate over each instance inside that array through arrow syntax.
The arrow syntax is going to point to 2 more functions( renderHero and showHero) that will display our data in the manner we prefer. The complete fetch will look like this:

OK, there's a lot going on, but we have one more thing to do. Our project is asking us to include additional members into the fellowship, so we have a form with an event listener sitting outside of the fetched data, and it includes the final function, addHero. Let's slip on that one ring to see what's going on under the hood! Sauron's like, REALLY dead though, right…?

Before we write our functions, it's important to declare variables that can be referenced throughout. We have a few that we declared in this example:

Function # 1: renderHero 
We base the function off of 'hero', a parameter in the object array (it gets declared in our wish-list function as well, which is what makes it all work). Element heroImg is a locally created element in the function and is declared to match parameter hero's value "img_url", found inside the object array. Should you click on the heroImg element, a click event listener will invoke function #2 (showHero). Regardless of clicking on heroImg, our function is going to append heroImg's properties into the div container heroNav.

Function #2: showHero
Almost everything from function #1 is repeating in this function: some locally declared variables that are taking on properties that are inside the object array, we have an event listener, and a function being called after the event listener is acted upon.

Function #3: addLikes
This function allows us to display the existing number of likes found in the object array, while also allowing us to increment the likes if we want to.
Function #4: addHero
OK, let's add some fellows to the fellowship with the addHero function. Our code doesn't persist, so if you reload the page, your added hero will be vanquished like the Balrog of Moria. Our function is targeting an event, while also preventing the default function of said event to occur. We declare a local element and have it target some div id's. After that declaration, we call renderHero again, which has showHero nested inside of it and allows the added hero to exist in the nav bar and be able to be shown.

Wish-List function: app()
Our wish-list function calls a fetch to a local API that is .then'd to json-ify the data (RIP grammar and English language), which is passed to a second .then that is iterating over the returned data array with a forEach and is invoking functions renderHero and showHero for every instance in that data array. 

It's also making sure that the first instance in the object array is shown by targeting the index value 0 inside brackets. Afterwards, we initiate the newHeroForm and include an event listener, which will trigger the addHero function upon the form being submitted. Invoke the wish-list function and hit reload on your HTML page to see what happens.

