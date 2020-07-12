for (let i = 0; i < 6; i++) {
    for (let j = 0; j <= i; j++) {
        document.getElementById('output').innerHTML += `+`;

    }
    document.getElementById('output').innerHTML += `<br>`;
}
document.getElementById('output').innerHTML += `<hr>`;
for (let i = 0; i <= 6; i++) {
    for (let j = 6; j >= i; j--) {
        document.getElementById('output').innerHTML += `1`;

    }
    document.getElementById('output').innerHTML += `<br>`;
}
document.getElementById('output').innerHTML += `<hr>`;
for (let i = 0; i < 7; i++) {
    if (i < 4)
        for (let j = 0; j <= i; j++) {

            document.getElementById('output').innerHTML += `0`;

        }
    else
        for (let j = 4; j >= i - 2; j--) {

            document.getElementById('output').innerHTML += `0`;

        }
    document.getElementById('output').innerHTML += `<br>`;
}