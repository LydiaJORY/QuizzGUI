// Ce script sert à animer la page d'accueil avec le clignotement des cases

$(function(){

	$('.start').click(function() {

		var $img = $('.question__apercu');  // On recupère l'image des aperçus
		var i = 0; 							// i correspond aux images pour la boucle qui va suivre
		var temps = null; 					// Le temps que dure l'animation pour s'éteindre/Allumer
		var delais = null;					//  Le délais que dure l'animation pour s'éteindre/Allumer

		// Pour commencer, les images sont invisibles
		$img.css('opacity', 0);

		
		//Pour les afficher une par une de façon aléatoire
		$img.each(function() {

			
			if (i % 2 == 0) { 				// multiple de 2

				temps = 1000;
				delais = 0;
				

			} else if (i % 3 == 0) {		// multiple de 3

				temps = 250;
				delais = 1025;
				
			} else { 						//ni un multiple de 2 ni de 3

				temps = 2125;
				delais = 2025;
			}

			$(this).animate({'opacity': 1}, temps).delay(delais);
			$(this).animate({'opacity': 0}, temps).delay(delais);
			$(this).animate({'opacity': 1}, temps + 2);

			i++;
		});

	});
});
