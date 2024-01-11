function sendEmail() {
    var params = {
            name: document.getElementById("name").value ,
            email: document.getElementById("email").value ,
            message: document.getElementById("message").value ,

    };
    const service = "service_4sk4yge";
const template = "template_bnv5nt5";

emailjs.send(service, template, params).then (
    res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Thank you! Message successfully sent.")


});
}

