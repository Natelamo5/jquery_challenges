$("#useBilling").click(function(){
	if ($('#useBilling').is(':checked')) {
		console.log("useBilling")
		$("#home").val($("#billing").val());
		$('#home').prop("disabled", true);
	} else {
			console.log('reenabled home address')
			$("#home").val($("").val());
			$('#home').prop("disabled", false);

	}

});



// if ($(this).is(':checked')) {
// 									 $('input:text[id*=txtBillAddr1]').val($('input:text[id*=txtShipAddr1]').val());
// 									 $('input:text[id*=txtBillAddr2]').val($('input:text[id*=txtShipAddr2]').val());
// 							 }
// 							 else {
// 									 $('input:text[id*=txtBillAddr1]').val('');
// 									 $('input:text[id*=txtBillAddr2]').val('');
// 							 }
//

// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	if (this.checked){
// 		home.value = document.querySelector("#billing").value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
//
// 	}
