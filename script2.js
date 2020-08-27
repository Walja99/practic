//Функция авторизации
$("#autorization").on("click", function () {
    var email = $("#emailA").val().trim();
    var pass = $("#password").val().trim();
    var data = new Object();
    data.username = email;
    data.userPassword = pass;
    data = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/user/authenticate",
        data: data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        success: function (n) {
            localStorage.setItem("user_id", n.id);
            localStorage.setItem("login", n.firstName);
            localStorage.setItem("token", n.token);
            alert("Авторизация прошла успешно!");
            window.location.reload();
        },
        error: function (t) {
            alert("Не удалось авторизоваться");
        }
    });
});
//Функция регистрации
$("#rege").on("click", function () {
    var email = $("#email").val().trim();
    var firstName = $("#firstName").val().trim();
    var password = $("#pass").val().trim();
    var secondName = $("#lastName").val().trim();
    var rank = "Участник";
    var sex = "m";
    var birth = $("#birthDate").val().trim();
    var phoneNumber = $("#phone").val().trim();
    var organization = $("#org").val().trim();
    var data = {
        "email": email,
        "password": password,
        "firstName": firstName,
        "secondName": secondName,
        "rank": rank,
        "sex": sex,
        "birth": birth,
        "phoneNumber": phoneNumber,
        "organization": organization
    }
    fetch('http://localhost:8080/create_user', {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(j => {
        console.log(j)
        if (j.status == 200) {
            alert("Регистрация прошла успешно")
            window.location.reload();
        }
    })
});
//Функция выход
$("#exit").on("click", function () {
    localStorage.removeItem("user_id")
    localStorage.removeItem("login")
    localStorage.removeItem("token")
    window.location.reload();
});
