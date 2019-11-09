function formSubmit(event) {
    event.preventDefault();
}

$(function() {
    $('form').submit(function() {
        $.ajax({
            type: 'POST',
            url: 'http://policescanner.space:8000/subscriptions',
            data: { username: $(this).phone.value,
                    password: $(this).keywords.value }
        });
        return false;
    });
})
