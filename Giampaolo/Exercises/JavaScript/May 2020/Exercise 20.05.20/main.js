function select(input) {
    userInput = input;
    check(userInput);
}

function check(userInput) {
    switch(userInput) {

    default:
        console.log('Invalid/Missing value')
        output.innerHTML = 'Invalid/Missing value';
        countryFlag.src = '';
        data.innerHTML = '';
        break;

    case 'Germany':
        console.log('Germany');
        countryFlag.src = 'images/Germany.png';
        output.innerHTML = '<h2>Germany</h2>';
        data.innerHTML = `
        <li><b>Capital:</b> Berlin</li>
        <li><b>Population:</b> 83,149,300</li>
        <li><b>States:</b> 16</li>
        <li><b>Money Currency:</b> Euro €</li>
        <li><b>Religion:</b> Christian, Islam</li>`
    break;

    case ('USA' || 'United States of America'):
        console.log('USA');
        countryFlag.src = 'images/USA.png';
        output.innerHTML = '<h2>USA</h2>';
        data.innerHTML = `
        <li><b>Capital:</b> Washington, D.C.</li>
        <li><b>Population:</b> 328,000,000</li>
        <li><b>States:</b> 50</li>
        <li><b>Money Currency:</b> Dollar $</li>
        <li><b>Religion:</b> Christian</li>`
    break;

    case ('UK' || 'United Kingdom'):
        console.log('UK');
        countryFlag.src = 'images/UK.png';
        output.innerHTML = '<h2>United Kingdom</h2>';
        data.innerHTML = `
        <li><b>Capital:</b> London</li>
        <li><b>Population:</b> 66.435.550</li>
        <li><b>States:</b> 4</li>
        <li><b>Money Currency:</b> Pound sterling £</li>
        <li><b>Religion:</b> Christian</li>`
    break;

    case ('Italy'):
        console.log('Italy');
        countryFlag.src = 'images/Italy.png';
        output.innerHTML = '<h2>Italy</h2>';
        data.innerHTML = `
        <li><b>Capital:</b> Rome</li>
        <li><b>Population:</b> 60,589,445</li>
        <li><b>Provincies:</b> 20</li>
        <li><b>Money Currency:</b> Euro €</li>
        <li><b>Religion:</b> Christian</li>`
    break;

    case ('Australia'):
        console.log('Australia');
        countryFlag.src = 'images/Australia.png';
        output.innerHTML = '<h2>Australia</h2>';
        data.innerHTML = `
        <li><b>Capital:</b> Canberra</li>
        <li><b>Population:</b> 25,714,700</li>
        <li><b>States:</b> 6</li>
        <li><b>Money Currency:</b> Australian dollar $</li>
        <li><b>Religion:</b> Various</li>`
    break;

    case ('Brazil'):
        console.log('Brazil');
        countryFlag.src = 'images/Brazil.png';
        output.innerHTML = '<h2>Brazil</h2>';
        data.innerHTML = `
        <li><b>Capital:</b> Brasília</li>
        <li><b>Population:</b> 210,147,125</li>
        <li><b>States:</b> 26</li>
        <li><b>Money Currency:</b> Real R$</li>
        <li><b>Religion:</b> Christian</li>`
    break;

    case ('Canada'):
        console.log('Canada');
        countryFlag.src = 'images/Canada.png';
        output.innerHTML = '<h2>Canada</h2>';
        data.innerHTML = `
        <li><b>Capital:</b> Ottawa</li>
        <li><b>Population:</b> 38,014,184</li>
        <li><b>Provincies:</b> 10</li>
        <li><b>Money Currency:</b> Canadian dollar $</li>
        <li><b>Religion:</b> Christian</li>`
    break;

    case ('China'):
        console.log('China');
        countryFlag.src = 'images/China.png';
        output.innerHTML = '<h2>China</h2>';
        data.innerHTML = `
        <li><b>Capital:</b> Beijing</li>
        <li><b>Population:</b> 1,427,647,786</li>
        <li><b>Provincies:</b> 31</li>
        <li><b>Money Currency:</b> Yuan ¥</li>
        <li><b>Religion:</b> Non-religious</li>`
    break;

    case ('Japan'):
        console.log('Japan');
        countryFlag.src = 'images/Japan.png';
        output.innerHTML = '<h2>Japan</h2>';
        data.innerHTML = `
        <li><b>Capital:</b> Tokyo</li>
        <li><b>Population:</b> 126.860.000 </li>
        <li><b>Prefectures:</b> 47</li>
        <li><b>Money Currency:</b> Yen ¥</li>
        <li><b>Religion:</b> Shinto</li>`
    break;

    case ('Turkey'):
        console.log('Turkey');
        countryFlag.src = 'images/Turkey.png';
        output.innerHTML = '<h2>Turkey</h2>';
        data.innerHTML = `
        <li><b>Capital:</b> Ankara</li>
        <li><b>Population:</b> 83,154,997</li>
        <li><b>Provincies:</b> 81</li>
        <li><b>Money Currency:</b> Turkish lira ₺</li>
        <li><b>Religion:</b> Islam</li>`
    break;
}
}
