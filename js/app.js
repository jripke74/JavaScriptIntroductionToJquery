$('.loc').hover(
  function() {
    $(this).html("<strong>Location:</strong> your house?!");
  },
  function() {
    $(this).html("<strong>Location:</strong> Treehouse Adoption Center");
});

// Grab info from the form
$('#add-pet').on('click', () => {
  const $name = $('#pet-name');
  const $species = $('#pet-species');
  const $notes = $('#pet-notes');

  var $newPet = $(
    '<section class="six columns"><div class="card"><p><strong>Name:</strong> ' + $name.val() +
    '</p><p><strong>Species:</strong> ' + $species.val() +
    '</p><p><strong>Notes:</strong> ' + $species.val() +
    '</p><span class="close">&times;</span></div></section>'
  );

  // Attach the new element to the page
  $('#posted-pets').append($newPet);

  // Reset form fields
  $name.val("");
  $species.val("Dog");
  $notes.val("");
});

// puppy images fade in
$('img').css('display', 'none').fadeIn(1600);

$('.card').on('click', function() {
  $(this).toggleClass('selected');
});
