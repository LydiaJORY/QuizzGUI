// Gestion des lightbox

 QUIZZ = function() {
 	
 	// On récupère le dossier où se trouve les réponses
	$.getJSON( "reponses.json", function( reponses ) {

		// Dans la lightbox, si on clique sur question__submit.(( On fonctionne comme un void Update.))
		$('.lightbox').on('click', '.question__submit', function() {
			
			//Récupérer le nom de la question avec l'attrribut data-name, ex q1
			var question = $(this).attr("data-name"); 
			
			//Récupérer la valeur du radio checked
			var reponseDonnee = $("input[type='radio'][name="+question+"]:checked").val(); 
			var reponseAttendue = reponses[question]; 

			// Si on a coché aucune case
			if (!reponseDonnee) {
				alert("Vous n'avez rien répondu");
				return;
			}

			//Si il y'a une réponse 
			if (reponseDonnee == reponseAttendue) { 
				var $msg = $('.message_flash__success').clone().removeClass('hidden');
				$(this).siblings('.lightbox__image').append($msg);
				$('.question[data-name="'+question+'"]').addClass('question_correcte');

			} else {

				var $msg = $('.message_flash__error').clone().removeClass('hidden');
				$(this).siblings('.lightbox__image').append($msg);
				$('.question[data-name="'+question+'"]').addClass('question_fausse');
			}

			$(this).parent().delay(3500).fadeOut();
			$('.lightbox').fadeOut(3500);
		});

		$('.lightbox__content__reponses li').click(function() {
			$('.clicked').removeClass('clicked');
			$(this).addClass('clicked');
		});
	});
};

$(QUIZZ);
