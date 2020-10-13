let getFullName = () => {
    console.log($('#username').val());
    let firstName = $('#username').val();

    $.ajax({
        type: 'GET',
        url: '/getFullName',
        data: {
            firstName
        },
        success: function (fullName) {
            console.log(fullName);
            $('#result').html(`<h1>${fullName}</h1>`);
        }

    })
};

let getUserFromApi = () => {
    let email = $('#email').val(); // client
    // get the user data from server side code
    $.ajax({
        type: 'GET',
        url: '/getRestApi',
        data: {
            email
        },
        success: function (info) {
            $('#resultApi').html(info);
        }
    });
};

console.log('Js File Linked')