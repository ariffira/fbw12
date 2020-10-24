//alert(1)
function getFullName() {
    //console.log($('#username').val());
    let firstName = $('#username').val(); // client
    //let fullName = firstName + 'Muller';
    // $('#resultid').html(fullName);
    // get the fullname from server side code
    $.ajax({
        type: 'get',
        url: '/getFullName',
        data: {
            firstName
        },
        success: function (fullname) {
            console.log(fullname);
            $('#result').html(`${fullname}`);
        }
    });
}