// $("#ch3form").change(function(){
//    $('#ch3form').not(this).prop('checked', false);
// });

$('#ch3form').submit(function() {
    if (!$("input[name='standing']:checked").val() || (!$("input[name='fruit']:checked").val())) {
      alert('you did not fill out one of the fields');
      return false;
    }
});





// ch3form.onsubmit = function() {
//     var fruit = document.querySelectorAll('input[name="fruit"]')
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//     alert("You must pick a fruit!")
//     return false;

    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;

    // alert("You must pick a fruit!")
    // return false;
//  }
