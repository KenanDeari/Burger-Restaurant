$(document).ready(function () {
	// devour button
	$('.devour-button').on('click', function () {
		var devourData = {
			id: $(this).attr('data-id')
		}
		//POST request.
		$.ajax("/burger/eat", {
			type: "POST",
			data: devourData
		}).then(function () {
			console.log("updated new burger to deveour!");
			//updated list pushed
			location.reload();
		});

	});
	// submit btn JS
	$('#submit-button').on('click', function () {
		var burgerData = {
			burger_name: $('#new_burger').val().trim()
		}
		// POST request.
		$.ajax("/burger/create", {
			type: "POST",
			data: burgerData
		}).then(function () {
			console.log("created new burger");
			// get the updated list
			location.reload();
		});
	});
	// re-order button
	$('.reorder-button').on('click', function () {
		var restoreData = {
			id: $(this).attr('data-id')
		}
		// POST request.
		$.ajax("/burger/restore", {
			type: "POST",
			data: restoreData
		}).then(function () {
			console.log("updated new burger to restore!");
			location.reload();
		});
	});
});