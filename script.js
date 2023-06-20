function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").ariaValueMax,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_m64m93j", "template_ytfgphy", params).then(function (res) {
        alert("Success!. Contact has been successfully sent")
    })
}