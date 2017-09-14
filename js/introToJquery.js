$('li').on('click', function() {
  $(this).text("Clicked!").delay(800).fadeOut(400);
});

$('a').not('[href*="my-domain.com"]').attr("target", "_blank");
console.log($('a').attr('href'));
$('button').on('click', function() {
  $('a').attr('href', 'https://github.com/');
  console.log($('a').attr('href'));
});
