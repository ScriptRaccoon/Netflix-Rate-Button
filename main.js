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
    $(".thumbs-up, .thumbs-down").addClass("out");
    $(".ratingControl").addClass("out");
}

function hideRatingOptions() {
    ratingPossible = false;
    $(".ratingOptions").fadeOut(200);
    $(".thumbs-up, .thumbs-down").removeClass("out");
    $(".ratingControl").removeClass("out");
}

for (let i = 0; i < 2; i++) {
    const option = i == 0 ? "up" : "down";
    const option2 = i == 0 ? "down" : "up";
    $(`.thumbs-${option}`).click(function () {
        if (!ratingPossible) return;
        ratingPossible = false;
        $(this).flashClass("flash", 80);
        if (currentMovie.rating != option) {
            currentMovie.rating = option;
            $(`.thumbs-${option}-image`).attr("src", `/img/thumbs-${option}-filled.svg`);
            $(`.thumbs-${option2}-image`).attr("src", `/img/thumbs-${option2}.svg`);
            setTimeout(() => {
                hideRatingOptions();
                $(".ratingImage").attr("src", `/img/thumbs-${option}-filled.svg`);
            }, 1000);
        } else {
            currentMovie.rating = null;
            $(`.thumbs-${option}-image`).attr("src", `/img/thumbs-${option}.svg`);
            setTimeout(() => {
                hideRatingOptions();
                $(".ratingImage").attr("src", "/img/thumbs-up.svg");
            }, 1000);
        }
    });
}

$.fn.flashClass = function (className, delay) {
    this.addClass(className);
    setTimeout(() => {
        this.removeClass(className);
    }, delay);
};
