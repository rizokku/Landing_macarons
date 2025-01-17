## Описание проекта

Этот проект представляет собой веб-страницу для оформления заказа на макаруны.

### Используемые технологии

- **HTML/CSS**: Для разметки и стилизации страницы.
- **JavaScript (jQuery)**: Для валидации формы и отправки AJAX-запросов.
- **LESS**: Для написания стилей с использованием переменных и вложенности.
- **Grunt**: Для автоматизации сборки и отслеживания изменений LESS-файлов.

## Функциональность

### Валидация формы

- Все поля формы обязательны для заполнения. При нажатии на кнопку "Оформить заказ" проверяются все поля.
- Если какое-то поле не заполнено, под ним отображается сообщение об ошибке, а рамка инпута становится красной. При повторной проверке стили сбрасываются, и показываются только актуальные ошибки.

### Отправка данных на сервер

- При успешной валидации отправляется POST-запрос с данными из полей: `product`, `name`, `phone`.
- Запросы выполняются с помощью AJAX от jQuery. Если отправляется `name`, равный `itlogia`, сервер возвращает `success: 1`, в противном случае — `success: 0`.

### Лоадер

- Во время отправки формы отображается лоадер по центру экрана с затемнением фона, информирующий пользователя о процессе обработки заказа.

### Обратная связь

- При успешном ответе форма скрывается, и отображается сообщение: "Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!".
- В случае ошибки выводится alert с текстом: "Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ".

## Установка

1. Клонируйте репозиторий:

   git clone [URL]
   cd [имя-папки]

2. Установите зависимости:

   npm install

3. Запустите Grunt для отслеживания изменений:

   grunt watch

## Использование

- Откройте `index.html` в браузере.
- Заполните форму и нажмите "Оформить заказ" для тестирования валидации и отправки данных.
