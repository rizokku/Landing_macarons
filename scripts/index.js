document.getElementById('burger').onclick = function () {
    document.getElementById('navigation').classList.add('open');
}
document.querySelectorAll('#navigation *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('navigation').classList.remove('open');
    }
});
let loader = $('.loader');

$('.main__btn').click(function () {
    let type = $('#input1');
    let name = $('#input2');
    let phone = $('#input3');
    let hasError = false;
    $('.error-input').hide();
    loader.css('display', 'flex');
    name.css('border-color', ' rgb(130, 19, 40)');
    type.css('border-color', ' rgb(130, 19, 40)');
    phone.css('border-color', ' rgb(130, 19, 40)');
    if (!type.val()) {
        type.next().show();
        hasError = true;
        $('#input1').css('border-color', 'red');

    }
    if (!name.val()) {
        name.next().show();
        $('#input2').css('border-color', 'red');
        hasError = true;


    }
    if (!phone.val()) {
        phone.next().show();
        $('#input3').css('border-color', 'red');
        hasError = true;

    }
    if (hasError) {
        loader.hide();
        return;
    }
    if (!hasError) {
        $.ajax({
            method: "POST",
            url: " https://testologia.ru/checkout ",
            data: {type: type.val(), name: name.val(), phone: phone.val()}
        })
            .done(function (msg) {
                console.log(msg);
                loader.hide();

                if (msg.success) {
                    $('.order__box').hide();
                    // $('.order__box').css('display', 'none');
                    $('.message').show();
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                }


            })
    }
})
