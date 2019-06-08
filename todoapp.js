//strike out an item
$('ul').on("click", "li", function() {
	$(this).toggleClass("completed");
});

//remove an item
$('ul').on("click", "span", function(click) {
	$(this).parent().fadeOut(500, function() {
    	$(this).remove();
    });
    click.stopPropagation();
});

//enter a todo item
$('input').keypress(function(key) {
	let addTodo = $(this).val();
	if(key.which === 13) {
		$(this).val("");
		$('ul').append("<li><span><i class='fas fa-ban'></i></span>" + addTodo + "</li>");
	}
});

//pencil button
$('.fa-pencil-alt').click(function() {
	$('input').fadeToggle(500);
});