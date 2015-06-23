var LIGHTBOX = function() {

	var timeStamp = false;

	$(".wrap").on('click', '.question:not(.question_correcte):not(.question_fausse)', function(event) {

		var lightbox = $('.lightbox');
		var lightbox_question = $(this).find(".lightbox__content").clone();

		lightbox_question.removeClass('hidden');
		$(lightbox).html(lightbox_question);
		$(lightbox).removeClass('hidden');
		$(lightbox).fadeIn(2000);

		timeStamp = event.timeStamp;

	});

	$(document).click(function (event) {
		var container = $('.lightbox__content');
	    if (!container.is(event.target) && container.has(event.target).length === 0 && (timeStamp + 2000) < event.timeStamp) {
	        $('.lightbox').fadeOut();
			timeStamp = event.timeStamp;
	    }
	});
};

$(LIGHTBOX);
