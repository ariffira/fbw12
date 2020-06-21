///////////////////////  js_mentoring_m1_for_loop_ex

  let row = '';
  for (let i = 1; i < 6; i++) {
    for (let j = 0; j < i; j++) {
        row = row +'*';
    }
    console.log(row);
    document.getElementById("id01").innerHTML += row+'<br>';
    row = '';
  }

  let array = [1, 2, 3, 4, 5]