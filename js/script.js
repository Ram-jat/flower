$(document).ready(function () {
    var milliseconds = 4000;
    var staticText = "Search for ";
    var placeholderTexts = ["plants", "flowers",];

    function Placeholder() {
        this.write_placeholder = function (field, text, n) {
            if (n < text.length) {
                $('#' + field).attr("placeholder", staticText + text.substring(0, n + 1));
                n++;
                setTimeout(() => {
                    this.write_placeholder(field, text, n);
                }, 60);
            }
        };

        this.set_fields = function (objFields) {
            for (var key in objFields) {
                if (!objFields.hasOwnProperty(key)) continue;
                let texts = objFields[key];
                let index = 0;

                const cyclePlaceholders = () => {
                    this.write_placeholder(key, texts[index], 0);
                    index = (index + 1) % texts.length;
                };

                cyclePlaceholders();
                setInterval(cyclePlaceholders, milliseconds);
            }
        };

        this.interval_time = function (ms) {
            milliseconds = ms;
        };
    }

    var obj = new Placeholder();
    obj.interval_time(5000);
    obj.set_fields({
        'searchbox': placeholderTexts
    });
});


$('.togglebtn').click(function () {
    $(".dsdd").toggleClass("sddff");
});
$(document).ready(function () {
    var owl = $('.banner');
    owl.owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
                merge: true,
            }
        }
    });
});





