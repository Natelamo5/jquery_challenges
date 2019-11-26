$('#ch4form').submit(function(){
  var name = $('#fullname').val();
  var street = $('#streetaddr').val();
  if (name.length == 0) {
  	console.log("Name error")
    $('#nameerrormsg').show();
    return false;

} else if (street.length == 0) {
    console.log("Street error")
    $('#addrerrormsg').show();
    return false;

  }

});









// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
//     console.log("Here");
//     console.log(name);
//     console.log(address)
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }
//
//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }
//
//     return validInput;
// }
