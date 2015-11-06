function send() {
    var key = 'YMP7ayh71LTbsqqzaxwDDQ';
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
            'key': key,
            'message': {
                'from_email': email,
                'to': [
                  {
                      'email': 'info@nzih.co.nz',
                      'name': name,
                      'type': 'to'
                  }
                ],
                'subject': subject,
                'html': message
            }
        }
    }).success(function () {

    }).error(function (err) {
        alert(err);
    });
}