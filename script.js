document.addEventListener("DOMContentLoaded", function() {
    displayReviews();
    
    document.getElementById('review-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var name = document.getElementById('name').value;
        var review = document.getElementById('review').value;
        var rating = document.getElementById('rating').value;
        
        if(name && review && rating) {
            addReview(name, review, rating);
            document.getElementById('name').value = '';
            document.getElementById('review').value = '';
            document.getElementById('rating').value = '';
        } else {
            alert('Please fill all fields!');
        }
    });
});

function displayReviews() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var reviews = JSON.parse(this.responseText);
            var reviewsContainer = document.getElementById('reviews-container');
            reviewsContainer.innerHTML = '';
            reviews.forEach(function(review) {
                reviewsContainer.innerHTML += '<div class="review"><h3>' + review.name + '</h3><p>' + review.review + '</p><p>Rating: ' + review.rating + '/5</p></div>';
            });
        }
    };
    xhttp.open("GET", "get_reviews.php", true);
    xhttp.send();
}

function addReview(name, review, rating) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            displayReviews();
        }
    };
    xhttp.open("POST", "add_review.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("name=" + name + "&review=" + review + "&rating=" + rating);
}
