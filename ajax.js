$('.form__btn').click(function(){
                // собираем данные с формы
                var user_mail   = $('#mail').val();
                var user_them   = $('#them').val();
                var user_text = $('#text').val();
                // отправляем данные
                $.ajax({
                    url: "form.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "json", // тип передачи данных
                    data: { // что отправляем
                        "user_mail":    user_mail,
                        "user_them":   user_them,
                        "user_text":   user_text
                    },
                    // после получения ответа сервера
                    success: function(data){
                        alert("jQuery alert box example !"); // выводим ответ сервера
                    }
                });
            });