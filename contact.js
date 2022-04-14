function submitForm(){
    var Name = document.getElementById("name");
    var Email = document.getElementById("email");
    var Company = document.getElementById("company");
    var Role = document.getElementById("role");
    var Trafore = document.getElementById("howyouhear");
    var msg = document.getElementById("message");
    const success= document.getElementById("success");
    const fail = document.getElementById("fail");

    if(Name.value === '' || Email.value === '' || Company.value === '' || Role.value === '' || msg.value === ''){
        fail.style.display = 'block';
    } else { 
        setTimeout(() => {
            Name.value = '';
            Email.value = '';
            Company.value = '';
            Role.value = '';
            msg.value = '';
            Trafore.value ='';
        }, 1000)
        success.style.display = 'block'}
    //remove the alert after submitting for 4 secs
    setTimeout(() => {
        fail.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

    Email.setAttributeNode({
        Host: "smtp.gmail.com",
        Username: "nglinhchi65@gmail.com",
        Password: "So6tayho",
        To: "nglinhchi65@gmail.com",
        From: document.getElementById("email").value,
        Subject: "New Message from Website",
        Body: "Name: " + Name +"<br>" + "Email: " + Email + "<br>" + msg,
    });
}