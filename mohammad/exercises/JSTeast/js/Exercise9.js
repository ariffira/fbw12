let matrix = [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1]
];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        document.getElementById('matrix').innerHTML += `${matrix[i][j]}`;
    }
    document.getElementById('matrix').innerHTML += `<br>`;
}