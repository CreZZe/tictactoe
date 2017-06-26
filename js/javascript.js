!function() {	
		
	var startHTML = '<div class="screen screen-start" id="start">';
	startHTML += '<header>';
	startHTML += '<h1>Tic Tac Toe</h1>';
	startHTML +=	'<a id="asd" href="#" class="button">Start game</a>';
	startHTML += '</header></div>';

	$("body").append(startHTML);


	var counter = 0;
	$(".boxes li").each(function() {
		counter++;
		$(this).attr("id", "spot" + counter);
	});


	$('#start a[class=button]').on('click', function(event) {
		event.preventDefault();
		var currentPlayer = "o";
		update(currentPlayer);
	});

	function update(currentPlayer) {
		current(currentPlayer);
		
		$("#start").remove();
		$("#finish").remove();
		
		$(".boxes li").hover(function() {
			if ( !$(this).hasClass("box-filled-1") && !$(this).hasClass("box-filled-2") ) {
				$(this).css("background-image", "url(img/" + currentPlayer + ".svg)");
			}
		}, function() {
			$(this).removeAttr("style");
		});
		
		$(".boxes li").click(function() {
			if ( !$(this).hasClass("box-filled-1") && !$(this).hasClass("box-filled-2") ) {
				
				var currentBackground = this.classList;
				
				if (currentPlayer == "o") {
					$(this).addClass("box-filled-1");
					currentPlayer = "x";
					current(currentPlayer);
				}
				else {
					$(this).addClass("box-filled-2");
					currentPlayer = "o";
					current(currentPlayer);
				}
				
				if ( 
				$("#spot1").hasClass("box-filled-1") && $("#spot2").hasClass("box-filled-1") && $("#spot3").hasClass("box-filled-1") || 
				$("#spot4").hasClass("box-filled-1") && $("#spot5").hasClass("box-filled-1") && $("#spot6").hasClass("box-filled-1") ||
				$("#spot7").hasClass("box-filled-1") && $("#spot8").hasClass("box-filled-1") && $("#spot9").hasClass("box-filled-1") ||
				$("#spot1").hasClass("box-filled-1") && $("#spot4").hasClass("box-filled-1") && $("#spot7").hasClass("box-filled-1") ||
				$("#spot2").hasClass("box-filled-1") && $("#spot5").hasClass("box-filled-1") && $("#spot8").hasClass("box-filled-1") ||
				$("#spot3").hasClass("box-filled-1") && $("#spot6").hasClass("box-filled-1") && $("#spot9").hasClass("box-filled-1") ||
				$("#spot1").hasClass("box-filled-1") && $("#spot5").hasClass("box-filled-1") && $("#spot9").hasClass("box-filled-1") ||
				$("#spot3").hasClass("box-filled-1") && $("#spot5").hasClass("box-filled-1") && $("#spot7").hasClass("box-filled-1") ) {
					finish("one", "Player one won!");
				} 
				
				else if ( 
				$("#spot1").hasClass("box-filled-2") && $("#spot2").hasClass("box-filled-2") && $("#spot3").hasClass("box-filled-2") || 
				$("#spot4").hasClass("box-filled-2") && $("#spot5").hasClass("box-filled-2") && $("#spot6").hasClass("box-filled-2") ||
				$("#spot7").hasClass("box-filled-2") && $("#spot8").hasClass("box-filled-2") && $("#spot9").hasClass("box-filled-2") ||
				$("#spot1").hasClass("box-filled-2") && $("#spot4").hasClass("box-filled-2") && $("#spot7").hasClass("box-filled-2") ||
				$("#spot2").hasClass("box-filled-2") && $("#spot5").hasClass("box-filled-2") && $("#spot8").hasClass("box-filled-2") ||
				$("#spot3").hasClass("box-filled-2") && $("#spot6").hasClass("box-filled-2") && $("#spot9").hasClass("box-filled-2") ||
				$("#spot1").hasClass("box-filled-2") && $("#spot5").hasClass("box-filled-2") && $("#spot9").hasClass("box-filled-2") ||
				$("#spot3").hasClass("box-filled-2") && $("#spot5").hasClass("box-filled-2") && $("#spot7").hasClass("box-filled-2") ) {
					finish("two", "Player two won!");
				}
				else  {
					tie();
				}
				
				function tie() {
					if ( 
						( $("#spot1").hasClass("box-filled-1") || $("#spot1").hasClass("box-filled-2") ) &&
						( $("#spot2").hasClass("box-filled-1") || $("#spot2").hasClass("box-filled-2") ) &&
						( $("#spot3").hasClass("box-filled-1") || $("#spot3").hasClass("box-filled-2") ) &&
						( $("#spot4").hasClass("box-filled-1") || $("#spot4").hasClass("box-filled-2") ) &&
						( $("#spot5").hasClass("box-filled-1") || $("#spot5").hasClass("box-filled-2") ) &&
						( $("#spot6").hasClass("box-filled-1") || $("#spot6").hasClass("box-filled-2") ) &&
						( $("#spot7").hasClass("box-filled-1") || $("#spot7").hasClass("box-filled-2") ) &&
						( $("#spot8").hasClass("box-filled-1") || $("#spot8").hasClass("box-filled-2") ) &&
						( $("#spot9").hasClass("box-filled-1") || $("#spot9").hasClass("box-filled-2") ) ) {
						finish("tie", "Round drawn!");
					}
				}
			}
		});
	}

	function current(current) {
		if (current == "o") {
			$("#player1").addClass("active");
			$("#player2").removeClass("active");
		}
		else if (current == "x") {
			$("#player1").removeClass("active");
			$("#player2").addClass("active");
		}
	}

	function finish(finishClass, message, currentPlayer) {
		var finishHTML = '<div class="screen screen-win screen-win-' + finishClass + '" id="finish">';
		finishHTML += '<header>';
		finishHTML	+= '<h1>Tic Tac Toe</h1>';
		finishHTML += '<p class="message">' + message + '</p>';
		finishHTML += '<a href="#" class="button">New game</a>';
		finishHTML += '</header></div>';
		
		$("body").append(finishHTML);

		$("#finish a").click(function(currentPlayer) {
			$(".boxes li").each(function(){
				$(this).removeClass("box-filled-1");
				$(this).removeClass("box-filled-2");
			});
			update(currentPlayer);
		});
	}
}();