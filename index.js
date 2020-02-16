/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
    var chk = document.getElementById("same");
    var shipN = document.getElementById("shippingName").value;
    var shipZ = document.getElementById("shippingZip").value;

    if (chk.checked == true){
        document.getElementById("billingName").value = shipN;
        document.getElementById("billingZip").value = shipZ;
    } else {
       document.getElementById("billingZip").value = " ";
       document.getElementById("billingName").value = " ";
    }
}