let getFullName = () => {
    console.log($('#username').val());
    let firstName = $('#username').val();

    $.ajax({
        type: 'GET',
        url: '/getFullName',
        data: {
            firstName
        },
        success: function(fullName) {
            console.log(fullName);
            $('#result').html(`<h1>${fullName}</h1>`);
        }

    })
}

console.log('Js File Linked')