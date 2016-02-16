$(function() {
  var number = 1
  
  $('#button-for-cat1').click(function() {
    $('#number-of-clicks').text(number)
    number++
  })
})
