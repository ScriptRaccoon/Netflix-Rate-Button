const currentMovie = {
    id: "28630857",
    title: "Princess Mononoke",
    rating: null,
};

const ratingOptions = ["up", "down"];

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

for (let i = 0; i < 2; i++) {
    const option = ratingOptions[i];
    const option2 = ratingOptions[1 - i];
    $(`.thumbs-${option}`).click(function () {
        if (!ratingPossible) return;
        ratingPossible = false;
        $(this).addClass("flashing");
        setTimeout(() => {
            $(this).removeClass("flashing");
        }, 80);
        if (currentMovie.rating != option) {
            currentMovie.rating = option;
            $(".ratingLabel").text("Rated");
            $(`.thumbs-${option}-image`).attr("src", `/img/thumbs-${option}-filled.svg`);
            $(`.thumbs-${option2}-image`).attr("src", `/img/thumbs-${option2}.svg`);
            setTimeout(() => {
                hideRatingOptions();
                $(".ratingImage").attr("src", `/img/thumbs-${option}-filled.svg`);
            }, 1000);
        } else if (currentMovie.rating == option) {
            currentMovie.rating = null;
            $(".ratingLabel").text("Rate");
            $(`.thumbs-${option}-image`).attr("src", `/img/thumbs-${option}.svg`);
            setTimeout(() => {
                hideRatingOptions();
                $(".ratingImage").attr("src", "/img/thumbs-up.svg");
            }, 1000);
        }
    });
}
