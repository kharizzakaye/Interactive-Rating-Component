var rating = 0;
const backgroundColor = "hsla(217, 12%, 63%, 20%)";

function setRating(ratingValue)
{
    rating = ratingValue;
    document.getElementById("1").style.backgroundColor = backgroundColor;
    document.getElementById("2").style.backgroundColor = backgroundColor;
    document.getElementById("3").style.backgroundColor = backgroundColor;
    document.getElementById("4").style.backgroundColor = backgroundColor;
    document.getElementById("5").style.backgroundColor = backgroundColor;
    
    document.getElementById(rating).style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById(rating).style.color = "white";
};

function submitRating()
{
    document.getElementById("rating-state").style.display = "none";
    document.getElementById("submitted-state").style.display = "block";
    document.getElementById("ratingResult").innerHTML = "You selected " + rating + " out of 5";
};