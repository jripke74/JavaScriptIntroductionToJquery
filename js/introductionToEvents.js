$('body').click( () => {
  console.log('Clicked!');
});

// without jquery-3
// document.getElementById('awesomeBtn').onclick = () => {
//   console.log('I clicked button');
// };

// using jquery-3
$('#awesomeBtn').on('click', (event) => {
  console.log(event);
});
