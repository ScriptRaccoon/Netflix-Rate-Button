const currentMovie = {
    id: "28630857",
    title: "Princess Mononoke",
    rating: null,
};

let ratingPossible = false;

$(".ratingImage").click(showRatingOptions);
$(".cancel").click(hideRatingOptions);

function showRatingOptions() {
    ratingPossible = true;
    $(".ratingOptions").fadeIn(200);
    $(".ratingLabel").css("opacity", 0);
    $(".thumbs-up, .thumbs-down").addClass("out");
}

function hideRatingOptions() {
    ratingPossible = false;
    $(".ratingOptions").fadeOut(200);
    $(".ratingLabel").css("opacity", 1);
    $(".thumbs-up, .thumbs-down").removeClass("out");
}

$(".thumbs-up").click(function () {
    if (!ratingPossible) return;
    ratingPossible = false;
    if (currentMovie.rating == null || currentMovie.rating == "-") {
        currentMovie.rating = "+";
        $(".ratingLabel").text("Rated");
        flash($(this));
        $(".thumbs-down-image").attr("src", "/img/thumbs-up.svg");
        $(".thumbs-up-image").attr("src", "/img/thumbs-up-filled.svg");
        setTimeout(() => {
            hideRatingOptions();
            $(".ratingImage")
                .attr("src", "/img/thumbs-up-filled.svg")
                .removeClass("flipped");
        }, 1000);
    } else if (currentMovie.rating == "+") {
        currentMovie.rating = null;
        $(".ratingLabel").text("Rate");
        flash($(this));
        $(this).children("img").attr("src", "/img/thumbs-up.svg");
        setTimeout(() => {
            hideRatingOptions();
            $(".ratingImage").attr("src", "/img/thumbs-up.svg");
        }, 1000);
    }
});

function flash(element) {
    element.addClass("flashing");
    setTimeout(() => {
        element.removeClass("flashing");
    }, 80);
}

$(".thumbs-down").click(function () {
    if (!ratingPossible) return;
    ratingPossible = false;
    if (currentMovie.rating == null || currentMovie.rating == "+") {
        currentMovie.rating = "-";
        $(".ratingLabel").text("Rated");
        flash($(this));
        $(".thumbs-up-image").attr("src", "/img/thumbs-up.svg");
        $(".thumbs-down-image").attr("src", "/img/thumbs-up-filled.svg");
        setTimeout(() => {
            hideRatingOptions();
            $(".ratingImage")
                .attr("src", "/img/thumbs-up-filled.svg")
                .addClass("flipped");
        }, 1000);
    } else if (currentMovie.rating == "-") {
        currentMovie.rating = null;
        $(".ratingLabel").text("Rate");
        flash($(this));
        $(this).children("img").attr("src", "/img/thumbs-up.svg");
        setTimeout(() => {
            hideRatingOptions();
            $(".ratingImage").attr("src", "/img/thumbs-up.svg").removeClass("flipped");
        }, 1000);
    }
});
