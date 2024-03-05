var result = function send(){

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var seat = document.getElementById('seat').value;
    var pickup = document.getElementById('pickup').value;
    var dropoff = document.getElementById('dropoff').value;

    if(name && email && phone && seat && pickup && dropoff ){
        localStorage.setItem('name',name);
        localStorage.setItem('email',email);
        localStorage.setItem('phone',phone);
        localStorage.setItem('seat',seat);
        localStorage.setItem('pickup',pickup);
        localStorage.setItem('dropoff',dropoff);

        document.getElementById("div1").innerHTML = "<h4 style='border:2px solid lightseagreen; padding:15px; text-align:center; color: black; background-color:lightgreen; font-size: 15px; width: 91%'>Successful!</h4>";
    }
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('seat').value = '';
        document.getElementById('pickup').value = '';
        document.getElementById('dropoff').value = '';    
}

function sendData(event) {
    event.preventDefault();

    var pickupDate = new Date(document.getElementById("pickup").value);
    var dropoffDate = new Date(document.getElementById("dropoff").value);

    if (pickupDate > dropoffDate) {
        alert("Warning: Pick-up date is greater than drop-off date!");
        return false; // Cancel form submission
    }
    return result(); // Allow form submission
}
