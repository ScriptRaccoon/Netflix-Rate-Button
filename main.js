const currentMovie = {
    id: "28630857",
    title: "Princess Mononoke",
    rating: null,
    added: false,
};

let ratingPossible = false;

$(".ratingImage").click(showRatingOptions);

$(".addImage").click(toggleAdd);

$(".cancel").click(() => {
    if (!ratingPossible) return;
    hideRatingOptions();
});

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

function toggleAdd() {
    if (currentMovie.added) {
        currentMovie.added = false;
        $(".addLabel").text("Add");
        $(".addImage").attr("src", "/img/plus.svg");
    } else {
        currentMovie.added = true;
        $(".addLabel").text("Added");
        $(".addImage").attr("src", "/img/check.svg");
    }
}

for (let i = 0; i < 2; i++) {
    const option = i == 0 ? "up" : "down";
    const option2 = i == 0 ? "down" : "up";
    $(`.thumbs-${option}`).click(function () {
        if (!ratingPossible) return;
        ratingPossible = false;
        $(this).flashClass("flash", 80);
        if (currentMovie.rating != option) {
            $(".ratingLabel").text("Rated");
            currentMovie.rating = option;
            $(`.thumbs-${option}-image`).attr("src", `/img/thumbs-${option}-filled.svg`);
            $(`.thumbs-${option2}-image`).attr("src", `/img/thumbs-${option2}.svg`);
            setTimeout(() => {
                hideRatingOptions();
                $(".ratingImage").attr("src", `/img/thumbs-${option}-filled.svg`);
            }, 600);
        } else {
            $(".ratingLabel").text("Rate");
            currentMovie.rating = null;
            $(`.thumbs-${option}-image`).attr("src", `/img/thumbs-${option}.svg`);
            setTimeout(() => {
                hideRatingOptions();
                $(".ratingImage").attr("src", "/img/thumbs-up.svg");
            }, 600);
        }
    });
}

$.fn.flashClass = function (className, delay) {
    this.addClass(className);
    setTimeout(() => {
        this.removeClass(className);
    }, delay);
};
