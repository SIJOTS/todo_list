
function validation() {
    if ($("#username").val() == "admin@gmail.com" && $("#pass").val() == "12345") {
       alert("sucess")
        // location.href = '/index.html';
        return(true)

    }
    else {
        alert("email id/password entered is wrong!");
        // location.reload();
        return(false)


    }
}
