/* Author: Philip Beel theodin.co.uk */

$(function() {

	$('#dj-form').submit(function (event) {
		event.preventDefault();
		// check the field was validated
		var songChoice = $('#song-choice').val();
		if(songChoice <= 1) {
			alert('Proszę wpisać wykonawcę i tytuł piosenki.');
		} else {
			$('#dj-form').hide();
			$('#song-loading').fadeIn();

			$.ajax({
				type: 'POST',
				url: 'https://script.google.com/macros/s/AKfycbz2SuwKWINcYWtWtMhRx3NJK9kmn-kIk7dSySVeI6wZ246vkUw/exec',
				data: {
					song: songChoice,
				},
				success: function(data) {
					$('#song-result-message').html('<span>Dziękuje</span>');
				},
				error:function(e) {
					$('#song-result-message').html('<p>Przepraszam ale nastąpił problem podczas wysyłania piosenki, <a href="http://silwiaimateusz.unicloud.pl/"> spróbuj ponownie</a>.</p>');
				}
			});

			setTimeout(function () {
				$('#song-loading').hide();
				$('.song-result-message').fadeIn();
			}, 3000);
		}

	});

	// RSVP form
	$('#rsvp-form').submit(function(event) {
		event.preventDefault();
		// check the form field was entered
		var rsvpName = $('#rsvp-name').val();
		var rsvpAttendance = $('#rsvp-attendance').val();
		
		if (rsvpName <= 1) {
			alert('Proszę wpisać imię i nazwisko.');
		} else {

			$('#rsvp-form').hide();
			$('#rsvp-loading').fadeIn();


			$.ajax({
				type: 'POST',
				url: 'https://script.google.com/macros/s/AKfycbxIYvoX0xNAnv7jmojCN1-lheNk9_I_zAuXsJ0psFj9ndpewwB7/exec',
				data: {
					name: rsvpName,
					attendance: rsvpAttendance,
				},
				success: function(data) {
					$('#rsvp-result-message').html('<span>Dziękuje za wypełnienie zgłoszenia.</span>');
					//@todo: store a local storage token to note they have submitted a response
					
				},
				error:function(e){
					$('#rsvp-result-message').html('<span>Przepraszam ale nastąpił problem podczas wysyłania zgłoszenia, <a href="http://silwiaimateusz.unicloud.pl/">spróbuj ponownie.</a></span>');
				}
			});


			setTimeout(function () {
				$('#rsvp-loading').hide();
				$('.rsvp-result-message').fadeIn();
			}, 3000);
		}
	});

	// Scroll to top of page
	$('a.scroll-top').click(function(){
		$('html, body').animate({scrollTop: '0px'}, 1000);
		return false;
	});
	
	// Smooth internal link scrolling
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});


});
