function testSwitch() {
    //let userName = document.getElementById('countryId').value;
    let countryName = countryId.value;
    //convert to small letter
    countryName = countryName.toLowerCase();
    document.getElementById('search').style.margin = '0%';
    document.getElementById('resultId').style.margin = '4% 0 0 4%';
    document.getElementById('resultId').style.backgroundI = 'whitesmoke';
    switch (countryName) {
        case 'de':

            document.getElementById('resultId').innerHTML = '<img src="https://itwgse.com/wp-content/uploads/2019/04/German-flag.jpg">' + ' <p>Germany (German: Deutschland, ), officially the Federal Republic of Germany (German: Bundesrepublik Deutschland), is a country in Central and Western Europe.<br> Covering an area of 357,022 square kilometres (137,847 sq mi), it lies between the Baltic and North seas to the north, and the Alps to the south. It borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west.</p> <table>' +
                '<thead>' +
                '<tr>' +
                '<th>State</th>' +
                '<th>Capital</th>' +
                '<th>Area <br>(km<sup>2</sup>)</th>' +
                '<th>Population (2018)</th>' +
                '<th>Nominal GDP billions EUR (2015)</th>' +
                '<th>Nominal GDP per capita EUR (2015)</th>'

            +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td>Baden-Württemberg</td>' +
            '<td>Stuttgart</td>' +
            '<td>5,751</td>' +
            '<td>11,069,533</td>' +
            '<td>461</td>' +
            '<td>42,800</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Bavaria</td>' +
            '<td>Munich</td>' +
            '<td>70,550</td>' +
            '<td>13,076,721</td>' +
            '<td>550</td>' +
            '<td>43,100 </td>' +
            '</tr>' +
            '<tr>' +
            '<td>Berlin</td>' +
            '<td>Berlin</td>' +
            '<td>892</td>' +
            '<td>3,644,826</td>' +
            '<td>125</td>' +
            '<td>35,700</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Brandenburg</td>' +
            '<td>Potsdam</td>' +
            '<td>29,654</td>' +
            '<td>2,511,917</td>' +
            '<td>66</td>' +
            '<td>26,500</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Bremen</td>' +
            '<td>Bremen</td>' +
            '<td>420</td>' +
            '<td>682,986</td>' +
            '<td>32</td>' +
            '<td>47,600</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Hamburg</td>' +
            '<td>Hamburg</td>' +
            '<td>755</td>' +
            '<td>1,841,179</td>' +
            '<td>110</td>' +
            '<td>61,800</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Hesse</td>' +
            '<td>Wiesbaden</td>' +
            '<td>21,115</td>' +
            '<td>6,265,809</td>' +
            '<td>264</td>' +
            '<td>43,100</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Mecklenburg-Vorpommern</td>' +
            '<td>Schwerin</td>' +
            '<td>23,214</td>' +
            '<td>1,609,675</td>' +
            '<td>40</td>' +
            '<td>25,000 </td>' +
            '</tr>' +
            '<tr>' +
            '<td>Lower Saxony</td>' +
            '<td>Hanover</td>' +
            '<td>47,593</td>' +
            '<td>7,982,448</td>' +
            '<td>259</td>' +
            '<td>32,900 </td>' +
            '</tr>' +
            '<tr>' +
            '<td>North Rhine-Westphalia</td>' +
            '<td>Düsseldorf</td>' +
            '<td>34,113</td>' +
            '<td>17,932,651</td>' +
            '<td>646</td>' +
            '<td>36,500</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Rhineland-Palatinate</td>' +
            '<td>Mainz</td>' +
            '<td>19,854</td>' +
            '<td>4,084,844</td>' +
            '<td>132</td>' +
            '<td>32,800</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Saarland</td>' +
            '<td>Saarbrücken</td>' +
            '<td>2,569</td>' +
            '<td>990,509</td>' +
            '<td>35</td>' +
            '<td>35,400</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Saxony</td>' +
            '<td>Dresden</td>' +
            '<td>18,416</td>' +
            '<td>4,077,937</td>' +
            '<td>113</td>' +
            '<td>27,800</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Saxony-Anhalt</td>' +
            ' <td>Magdeburg</td>' +
            '<td>20,452</td>' +
            '<td>2,208,321</td>' +
            '<td>57</td>' +
            '<td>25,200</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Schleswig-Holstein</td>' +
            '<td>Kiel</td>' +
            '<td>15,802</td>' +
            '<td>2,896,712</td>' +
            '<td>86</td>' +
            '<td>31,200</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Thuringia</td>' +
            ' <td>Erfurt</td>' +
            '<td>16,202</td>' +
            '<td>2,143,145</td>' +
            '<td>57</td>' +
            '<td>26,400</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Germany</td>' +
            '<td>Berlin</td>' +
            '<td>357,386</td>' +
            '<td>83,019,213</td>' +
            '<td>3025</td>' +
            '<td>37,100</td>' +
            '</tr>' +
            '</tbody>'

            +
            '</table>';
            break;
        case 'syr':
            document.getElementById('resultId').innerHTML = '<img src="https://ak.picdn.net/shutterstock/videos/21523036/thumb/1.jpg">' + ' <p>Syria (Arabic: سوريا‎, romanized: Sūriyā), officially the Syrian Arab Republic (Arabic: الجمهورية العربية السورية‎, romanized: al-Jumhūrīyah al-ʻArabīyah as-Sūrīyah), is a country in Western Asia, bordering Lebanon to the southwest, the Mediterranean Sea to the west, Turkey to the north, Iraq to the east, Jordan to the south, and Israel to the southwest. A country of fertile plains, high mountains, and deserts, Syria is home to diverse ethnic and religious groups, including Syrian Arabs, Kurds, Turkemens, Assyrians, Armenians, Circassians, Mandeans and Greeks. Religious groups include Sunnis, Christians, Alawites, Druze, Ismailis, Mandeans, Shiites, Salafis, Yazidis, and Jews. Arabs are the largest ethnic group, and Sunnis the largest religious group.</p> <table>' +
                '<tbody>' +
                '<tr>'

            +
            '<th>No.</th>' +
            '<th>Governorate</th>' +
            '<th>Capital</th>' +
            '</tr>'

            +
            '<tr>' +
            '<td>1</td>' +
            '<td>>Latakia</td>' +
            '<td>>Latakia</td>' +
            '</tr>' +
            '<tr>' +
            '<td>2</td>' +
            '<td>Idlib</td>' +
            '<td>Idlib</td>' +
            '</tr>' +
            '<tr>' +
            '<td>3</td>' +
            '<td>Aleppo</td>' +
            '<td>Aleppo</td>' +
            '</tr>' +
            '<tr>' +
            '<td>4</td>' +
            '<td>Raqqa</td>' +
            '<td>Raqqa</td>' +
            '</tr>' +
            '<tr>' +
            '<td>5</td>' +
            '<td>Al-Hasakah</td>' +
            '<td>Al-Hasakah</td>' +
            '</tr>' +
            '<tr>' +
            '<td>6</td>' +
            '<td>Tartus</td>' +
            '<td>Tartus</td>' +
            '</tr>' +
            '<tr>' +
            '<td>7</td>' +
            '<td>Hama</td>' +
            '</tr>' +
            '<tr>' +
            '<td>8</td>' +
            '<td>Deir ez-Zor</td>' +
            '<td>Deir ez-Zor</td>' +
            '</tr>' +
            '<tr>' +
            '<td>9</td>' +
            '<td>Homs</td>' +
            '<td>Homs</td>' +
            '</tr>' +
            '<tr>' +
            '<td>10</td>' +
            '<td>Damascus</td>' +
            '<td>Damascus</td>' +
            '</tr>' +
            '<tr>' +
            '<td>11</td>' +
            '<td>Rif Dimashq</td>' +
            '<td>___</td>' +
            '</tr>' +
            '<tr>' +
            '<td>12</td>' +
            '<td>Quneitra</td>' +
            '<td>Quneitra</td>' +
            '</tr>' +
            '<tr>' +
            '<td>13</td>' +
            '<td>Daraa</td>' +
            '<td>Daraa</td>' +
            '</tr>' +
            '<tr>' +
            '<td>14</td>' +
            '<td>Al-Suwayda</td>' +
            '<td>Al-Suwayda</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>';
            break;
        case 'egy':
            document.getElementById('resultId').innerHTML = '<img src="https://acegif.com/wp-content/gif/egypt-flag-1-gap.jpg">' + ' <p>Egypt (/ˈiːdʒɪpt/ (About this soundlisten) EE-jipt; Arabic: مِصر‎ Miṣr), officially the Arab Republic of Egypt, is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia by a land bridge formed by the Sinai Peninsula. Egypt is a Mediterranean country bordered by the Gaza Strip (Palestine) and Israel to the northeast, the Gulf of Aqaba and the Red Sea to the east, Sudan to the south, and Libya to the west. Across the Gulf of Aqaba lies Jordan, across the Red Sea lies Saudi Arabia, and across the Mediterranean lie Greece, Turkey and Cyprus, although none share a land border with Egypt.</p> <table>' +
                '<tbody>' +
                '<tr>'

            +
            '<th>Rank</th>' +
            '<th>Name</th>' +
            '<th>Governorate</th>' +
            '<th>Pop.</th>' +
            '<th>Rank</th>' +
            '<th>Name</th>' +
            '<th>Governorate</th>' +
            '<th>Pop.</th>' +
            '</tr>' +
            '<tr>'

            +
            '<td>1</td>' +
            '<td>Cairo</td>' +
            '<td>Cairo</td>' +
            '<td>9,153,135</td>' +
            '<td>11</td>' +
            '<td>Asyut</td>' +
            '<td>Asyut</td>' +
            '<td>462,061</td>'

            +
            '</tr>' +
            '<tr>' +
            '<td>2</td>' +
            '<td>Alexandria</td>' +
            '<td>Alexandria</td>' +
            '<td>5,039,975</td>' +
            '<td>12</td>' +
            '<td>El Khusus</td>' +
            '<td>Qalyubia</td>' +
            '<td>459,586</td>' +
            '</tr>' +
            '<tr>' +
            '<td>3</td>' +
            '<td>za</td>' +
            '<td>Giza</td>' +
            '<td>4,146,340</td>' +
            '<td>13</td>' +
            '<td>Ismailia</td>' +
            '<td>Ismailia</td>' +
            '<td>386,372</td>' +
            '</tr>' +
            '<tr>' +
            '<td>4</td>' +
            '<td>Shubra El Kheima</td>' +
            '<td>Qalyubia</td>' +
            '<td>1,165,914</td>' +
            '<td>14</td>' +
            '<td>Zagazig</td>' +
            '<td> Sharqia</td>' +
            '<td>383,703</td>' +
            '</tr>' +
            '<tr>' +
            '<td>5</td>' +
            '<td>Port Said</td>' +
            '<td>Port Said</td>' +
            '<td>751,073</td>' +
            '<td>15</td>' +
            '<td>6th of October</td>' +
            '<td>Giza</td>' +
            '<td>350,018</td>' +
            '</tr>' +
            '<tr>' +
            '<td>6</td>' +
            '<td>Suez</td>' +
            '<td>Suez</td>' +
            '<td>660,592</td>' +
            '<td>16</td>' +
            '<td>Aswan</td>' +
            '<td>Aswan</td>' +
            '<td>321,761</td>' +
            '</tr>' +
            '<tr>' +
            '<td>7</td>' +
            '<td>Mansoura</td>' +
            '<td>Dakahlia</td>' +
            '<td>548,259</td>' +
            '<td>17</td>' +
            '<td>New Cairo</td>' +
            '<td>Cairo</td>' +
            '<td>298,343</td>' +
            '</tr>' +
            '<tr>' +
            '<td>8</td>' +
            '<td>El Mahalla El Kubra</td>' +
            '<td>Gharbia</td>' +
            '<td>522,799</td>' +
            '<td>18</td>' +
            '<td>etta">Damietta</td>' +
            '<td>Damietta</td>' +
            '<td>282,879</td>' +
            '</tr>' +
            '<tr>' +
            '<td>9</td>' +
            '<td>Tanta</td>' +
            '<td>Gharbia</td>' +
            '<td>508,754</td>' +
            '<td>19</td>' +
            '<td>Damanhur</td>' +
            '<td>Beheira</td>' +
            '<td>262,505 </td>' +
            '</tr>' +
            '<tr>' +
            '<td>10</td>' +
            '<td>Faiyum</td>' +
            '<td>Faiyum</td>' +
            '<td>475,139</td>' +
            '<td>20</td>' +
            '<td>Minya</td>' +
            '<td>Minya</td>' +
            '<td>245,478</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>'
            break;
        case 'ind':
            document.getElementById('resultId').innerHTML = '<img src="https://cdn.pixabay.com/photo/2020/04/14/10/15/flag-of-india-5041783_960_720.jpg">' + ' <p>Indien (Aussprache [ˈɪndi̯ən]) ist ein Staat in Südasien, der den größten Teil des indischen Subkontinents umfasst. Indien ist eine Bundesrepublik, die von 28 Bundesstaaten gebildet wird und außerdem acht bundesunmittelbare Gebiete umfasst. Der Eigenname der Republik lautet in den beiden landesweit gültigen Amtssprachen Bharat Ganarajya (Hindi) und Republic of India (Englisch). Die moderne demokratische und säkulare indische Republik besteht seit 1949 und seit 1950 gilt die Verfassung Indiens.</p> <table>'

            +
            '<thead>' +
            '<tr>' +
            '<th>Rang</th>' +
            '<th>Stadt</th>' +
            '<th>Bundesstaat</th>' +
            '<th>Einwohner</th>' +
            '<th></th>' +
            '<th>Rang</th>' +
            '<th>Stadt</th>' +
            '<th>Bundesstaat</th>' +
            '<th>Einwohner</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td>1</td>' +
            '<td>Mumbai</td>' +
            '<td>Maharashtra</td>' +
            '<td>18.414.288</td>' +
            '<td> </td>' +
            '<td>11</td>' +
            '<td>Kanpur</td>' +
            '<td>Uttar Pradesh</td>' +
            '<td>2.920.067</td>' +
            '</tr>' +
            '<tr>' +
            '<td>2</td>' +
            '<td> </td>' +
            '<td> <i>(Territorium)</i></td>' +
            '<td>16.314.838</td>' +
            '<td>12</td>' +
            '<td>Lucknow</td>' +
            '<td>Uttar Pradesh</td>' +
            '<td>2.901.474</td>' +
            '</tr>' +
            '<tr>' +
            '<td>3</td>' +
            '<td>Kalkutta</td>' +
            '<td>Westbengalen</td>' +
            '<td>14.112.536</td>' +
            '<td>13</td>' +
            '<td>Nagpur</td>' +
            '<td>Maharashtra</td>' +
            '<td>2.497.777</td>' +
            '</tr>' +
            '<tr>' +
            '<td>4</td>' +
            '<td>Chennai</td>' +
            '<td>Tamil Nadu</td>' +
            '<td>8.696.010</td>' +
            '<td>14</td>' +
            '<td>Ghaziabad</td>' +
            '<td>Uttar Pradesh</td>' +
            '<td>2.358.525</td>' +
            '</tr>' +
            '<tr>' +
            '<td>5</td>' +
            '<td>Bangalore</td>' +
            '<td>Karnataka</td>' +
            '<td>8.499.399</td>' +
            '<td>15</td>' +
            '<td>Indore</td>' +
            '<td>Madhya Pradesh</td>' +
            '<td>2.167.447</td>' +
            '</tr>' +
            '<tr>' +
            '<td>6</td>' +
            '<td>Hyderabad</td>' +
            '<td>Telangana</td>' +
            '<td>7.749.334</td>' +
            '<td>16</td>' +
            '<td>Coimbatore</td>' +
            '<td>Tamil Nadu</td>' +
            '<td>2.151.466</td>' +
            '</tr>' +
            '<tr>' +
            '<td>7</td>' +
            '<td>Ahmedabad</td>' +
            '<td>Gujarat</td>' +
            '<td>6.352.254</td>' +
            '<td>17</td>' +
            '<td>Kochi</td>' +
            '<td>Kerala</td>' +
            '<td>2.117.990</td>' +
            '</tr>' +
            '<tr>' +
            '<td>8</td>' +
            '<td>Pune</td>' +
            '<td>Maharashtra</td>' +
            '<td>5.049.968</td>' +
            '<td>18</td>' +
            '<td>Patna</td>' +
            '<td>Bihar</td>' +
            '<td>2.046.652</td>' +
            '</tr>' +
            '<tr>' +
            '<td>9</td>' +
            '<td>Surat</td>' +
            '<td>Gujarat</td>' +
            '<td>4.585.367</td>' +
            '<td>19</td>' +
            '<td>Kozhikode</td>' +
            '<td>Kerala</td>' +
            '<td>2.030.519</td>' +
            '</tr>' +
            '<tr>' +
            '<td>10</td>' +
            '<td>Jaipur</td>' +
            '<td>Rajasthan</td>' +
            '<td>3.073.350</td>' +
            '<td>20</td>' +
            '<td>Thrissur</td>' +
            '<td>Kerala</td>' +
            '<td>1.854.783</td>' +
            '</tr>' +
            '</tbody>'

            +
            '</table>'
            break;
        default:
            console.log('NO Data for you');
            document.getElementById('resultId').innerHTML = 'No info for this country!Sorry :(';
            break;
    }
}