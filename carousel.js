var carousel = ["bob","mary","sally"];
var carLength = carousel.length;

for (x = 0; x <= carLength*2; x++) {
    console.log("This is round number " + x + " on our carousel. Weeeeee!")
    if (x % 2 !== 0) {
        console.log("Who is still on the carousel? Let\'s see... " + carousel);
        var y = carousel.shift();
        console.log(y + " hopped off the carousel! Goodbye, " + y + "!");
    } else if (carousel.length === 0) {
        console.log("Wait, where did everyone go? I want to keep playing!")
    } else {
        console.log("That was a fun round! Everyone wants to go again!")
    }
}

console.log(carLength)
