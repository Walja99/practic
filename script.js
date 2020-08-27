//Функция для создания карточек
function showEvents() {
    var element = document.getElementById("events");
    for (let i = 0; i < eventsResponse.length; i++) {
        var div_card = document.createElement('div');
        if (element.className == "row justify-content-center eng") {
            div_card.innerHTML =
                "<div class='card-body'><h4 class='card-title'>" + eventsResponse[i]["name"] + "</h4>" +
                " <p class='card-text'>Start: " + eventsResponse[i]["startTime"] + "\nEnd: " +
                eventsResponse[i]["endTime"] + "</p>" +
                "<button  id='btn_regevent" + (i + 1) + "' class='btn btn-primary " +
                eventsResponse[i]["orgId"] + "'>Take part</button>" +
                "</div>";
        } else {
            div_card.innerHTML =
                "<div class='card-body'>" +
                "<h4 class='card-title'>" + eventsResponse[i]["name"] + "</h4> " +
                "<p class='card-text'>Начало: " + eventsResponse[i]["startTime"] + "\nКонец: " +
                eventsResponse[i]["endTime"] + "</p>" +
                "<button id='btn_regevent" + (i + 1) + "' class='btn btn-primary " +
                eventsResponse[i]["orgId"] + "'>Зарегистрироваться</button>" +
                "</div>";
        }
        div_card.className = "card col-md-4 col-lg-3 mb-3";
        element.appendChild(div_card);
    }

    setTakePartClick()
    if (localStorage.getItem("user_id")) {
        document.getElementById("aut").style = "display : inline";
        document.getElementById("exit").style = "display : inline";
        hello.innerHTML = "Hello, " + localStorage.getItem("user_id");
        var hello = document.getElementById("hello");
        if (hello.className == "eng mr-lg-5") {
            hello.innerHTML = "Hello, " + localStorage.getItem("login");
        } else {
            hello.innerHTML = "Здравствуйте, " + localStorage.getItem("login");
        }
    } else {
        document.getElementById("aut").style = "display : inline";
        document.getElementById("exit").style = "display : none";
        var hello = document.getElementById("hello");
        if (hello.className == "eng mr-lg-5") {
            hello.innerHTML = "Log in.";
        } else {
            hello.innerHTML = "Авторизируйтесь для выполнения лабораторной работы.";
        }
    }
}

//Функция для создания контента
(function createContent() {
    var url = "http://localhost:8080/events";
    fetch(url, {
        method: 'GET', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
        }
    }).then(response => {
        response.json().then(json => {
            eventsResponse = json
            showEvents();
        })
    })
})();
//Функция для проверки данных
(function checkInput() {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
