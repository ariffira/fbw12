let personArray = [];


//
class GrandParent {
    constructor(firstName, gender, age, eyes) {
        this.firstName = firstName;
        this.birthName = 'Müller';
        this.gender = gender;
        this.age = age;
        this.city = 'Düseldorf';
        this.country = 'Germany'
        this.eyes = eyes;
    }
    firstChild(childIndex) {
        this.childIndex = childIndex;
    }
    partner(partnerIndex) {
        this.partnerIndex = partnerIndex;
    }
    father(fatherIndex) {
        this.fatherIndex = fatherIndex;
    }
    familyName() {
        if (this.partnerIndex) {
            if (this.gender == 'f') {
                return this.lastName = personArray[this.partnerIndex].birthName;
            }
            else {
                return this.lastName = this.birthName;
            }
        }
        else {
            return this.lastName = this.birthName;
        }
    }
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    get changingBirthName(){
        this.birthName = this.birthName;
    }
    set changingBirthName(value){
        this.birthName = value;
    }
    get changingCity(){
        this.city = this.city;
    }
    set changingCity(value){
        this.city = value;
    }
    get changingCountry(){
        this.country = this.country;
    }
    set changingCountry(value){
        this.country = value;
    }
}

personArray[0] = new GrandParent('Peter', 'm', 80, 'Green');
personArray[0].partner(1);
personArray[0].firstChild(2);


//
class GrandPartner extends GrandParent {
    constructor(firstName, gender, age, eyes) {
        super(firstName, gender, age, eyes)
    }
}

personArray[1] = new GrandPartner('Jessica', 'f', 75, 'Brown');
personArray[1].partner('0');
personArray[1].changingBirthName = 'Schmidt';


//
class Parent extends GrandParent {
    constructor(firstName, gender, age, eyes) {
        super(firstName, gender, age, eyes)
    }
    nextSibling(siblingIndex) {
        this.siblingIndex = siblingIndex;
    }
}

personArray[2] = new Parent('Ron', 'm', 55, 'Blue');
personArray[2].nextSibling(3);
personArray[2].changingBirthName = personArray[0].birthName;
personArray[2].changingCity = 'New York';
personArray[2].changingCountry = 'USA';

personArray[3] = new Parent('Sheila', 'f', 51, 'Brown');
personArray[3].nextSibling(5);
personArray[3].partner(4);
personArray[3].firstChild(7);
personArray[3].changingBirthName = personArray[0].birthName;
personArray[3].changingCity = 'München'

personArray[5] = new Parent('Robert', 'm', 48, 'Blue');
personArray[5].partner(6);
personArray[5].firstChild(11);
personArray[5].changingBirthName = personArray[0].birthName;
personArray[5].changingCity = 'Essen'


//
class Partner extends Parent {
    constructor(firstName, gender, age, eyes) {
        super(firstName, gender, age, eyes)
    }
}

personArray[4] = new Partner('Daived', 'm', 54, 'Brown');
personArray[4].partner(3);
personArray[4].changingBirthName = 'Schneider';
personArray[4].changingCity = 'München'

personArray[6] = new Partner('Eva', 'f', 42, 'Green');
personArray[6].partner(5);
personArray[6].changingBirthName = 'Fischer';
personArray[6].changingCity = 'Essen'


//
class Child extends Parent {
    constructor(firstName, gender, age, eyes) {
        super(firstName, gender, age, eyes)
    }
}

personArray[7] = new Child('Cynthia', 'f', 30, 'Blue');
personArray[7].nextSibling(9);
personArray[7].partner(8);
personArray[7].firstChild(13);
personArray[7].changingBirthName = personArray[4].birthName;
personArray[7].changingCity = 'Berlin'

personArray[9] = new Child('Steven', 'm', 34, 'Brown');
personArray[9].partner(10);
personArray[9].firstChild(15);
personArray[9].changingBirthName = personArray[4].birthName;
personArray[9].changingCity = 'Barcelona'
personArray[9].changingCountry = 'Spain';

personArray[11] = new Child('Francisco', 'm', 28, 'Green');
personArray[11].partner(12);
personArray[11].firstChild(16);
personArray[11].changingBirthName = personArray[5].birthName;
personArray[11].changingCity = 'Roma'
personArray[11].changingCountry = 'Italy';


//
class ChildPartner extends Child {
    constructor(firstName, gender, age, eyes) {
        super(firstName, gender, age, eyes)
    }
}

personArray[8] = new ChildPartner('Donald', 'm', 32, 'Green');
personArray[8].partner(7);
personArray[8].changingBirthName = 'Weber';
personArray[8].changingCity = 'Berlin'

personArray[10] = new ChildPartner('Sandra', 'f', 30, 'Blue');
personArray[10].partner(9);
personArray[10].changingBirthName = 'Meyer';
personArray[10].changingCity = 'Barcelona'
personArray[10].changingCountry = 'Spain';

personArray[12] = new ChildPartner('Amanda', 'f', 25, 'Brown');
personArray[12].partner(11);
personArray[12].changingBirthName = 'Becker';
personArray[12].changingCity = 'Roma'
personArray[12].changingCountry = 'Italy';


//
class GrandChild extends Child {
    constructor(firstName, gender, age, eyes) {
        super(firstName, gender, age, eyes)
    }
}

personArray[13] = new GrandChild('Mark', 'm', 6, 'Green');
personArray[13].nextSibling(14);
personArray[13].changingBirthName = personArray[8].birthName;
personArray[13].changingCity = 'Berlin'

personArray[14] = new GrandChild('Luna', 'f', 8, 'Brown');
personArray[14].changingBirthName = personArray[8].birthName;
personArray[14].changingCity = 'Berlin'

personArray[15] = new GrandChild('Perdo', 'm', 2, 'Blue');
personArray[15].changingBirthName = personArray[9].birthName;
personArray[15].changingCity = 'Barcelona'
personArray[15].changingCountry = 'Spain';

personArray[16] = new GrandChild('Zula', 'f', 9, 'Green');
personArray[16].nextSibling(17);
personArray[16].changingBirthName = personArray[11].birthName;
personArray[16].changingCity = 'Roma'
personArray[16].changingCountry = 'Italy';

personArray[17] = new GrandChild('Cleveland', 'm', 2, 'Blue');
personArray[17].changingBirthName = personArray[11].birthName;
personArray[17].changingCity = 'Roma'
personArray[17].changingCountry = 'Italy';

//
personArray.map(item => { item.familyName(); });
personArray.map(addArraymodal);

function addArraymodal(item, index) {
    addmodal.innerHTML += `
    <div class="modal fade" id="exampleModal${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel">${item.fullName()}</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body table-responsive">
                    <table class="table table-borderless ">
                        <tr>
                        <th>First name:</th>
                        <td>${item.firstName}</td>
                        <td rowspan="4" colspan="2" class="text-center"> <img class="modalimg" src="img/${item.firstName}.png"></td>
                        </tr>
                        <tr>
                        <th>Last name:</th>
                        <td>${item.lastName}</td>
                        </tr>
                        <tr>
                        <th>Birth name:</th>
                        <td>${item.birthName}</td>
                        </tr>
                        <tr>
                        <th>Age:</th>
                        <td>${item.age}</td>
                        </tr>
                        <tr>
                        <th>Partner:</th>
                        <td>${addPartnerName()}</td>                        
                        <th>Eyes color:</th>
                        <td>${item.eyes}</td>
                        </tr>
                        <tr>
                        <th>Children:</th>
                        <td>${addCildrenNames()}</td>                        
                        <th>Live in:</th>
                        <td>${item.city}<br><b>(${item.country})</b></td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    </div>`;

    function addPartnerName() {
        if (item.partnerIndex) {
            return personArray[item.partnerIndex].firstName;
        }
        else {
            return `---`;
        }
    }
    function addCildrenNames() {
        if (item.childIndex) {
            return '<li>'+ personArray[item.childIndex].firstName +'</li>' + addNextSiblingNames(personArray[item.childIndex]);
        }
        else if (item.partnerIndex) {
            return '<li>'+ personArray[personArray[item.partnerIndex].childIndex].firstName +'</li>' + addNextSiblingNames(personArray[personArray[item.partnerIndex].childIndex]);
        }
        {
            return `---`;
        }
    }
    function addNextSiblingNames(x) {
        if (x.siblingIndex) {
            return '<li>' + personArray[x.siblingIndex].firstName +'</li>' + addNextSiblingNames(personArray[x.siblingIndex]);
        }
        else {
            return ``;
        }
    }
}

//
console.log(personArray)

//
let male = 'class="bg-primary" data-toggle="modal" data-target="#exampleModal';
let female = 'class="bg-danger" data-toggle="modal" data-target="#exampleModal';

drowTree.innerHTML = displayTree(personArray[0], 0);

function displayTree(member, i) {
    if (member.gender == 'm') {

        if (member.childIndex) {

            if (member.siblingIndex) {
                return `
                <li>
                    <p>
                        <span ${male + i}"><img src="img/${member.firstName}.png"><br>${member.fullName()}</span><span ${female + member.partnerIndex}"><img src="img/${personArray[member.partnerIndex].firstName}.png"><br>${personArray[member.partnerIndex].fullName()}</span>
                    </p>
                    <ul>${displayTree(personArray[member.childIndex], member.childIndex)}</ul>
                </li>${displayTree(personArray[member.siblingIndex], member.siblingIndex)}`;
            }
            else {
                return `
                <li>
                    <p>
                        <span ${male + i}"><img src="img/${member.firstName}.png"><br>${member.fullName()}</span><span ${female + member.partnerIndex}"><img src="img/${personArray[member.partnerIndex].firstName}.png"><br>${personArray[member.partnerIndex].fullName()}</span>
                    </p>
                    <ul>${displayTree(personArray[member.childIndex], member.childIndex)}</ul>
                </li>`;
            }

        }
        else {

            if (member.siblingIndex) {
                return `
                <li>
                    <p>
                        <span ${male + i}"><img src="img/${member.firstName}.png"><br>${member.fullName()}</span>
                    </p>
                </li>${displayTree(personArray[member.siblingIndex], member.siblingIndex)}`;
            }
            else {
                return `
                <li>
                    <p>
                        <span ${male + i}"><img src="img/${member.firstName}.png"><br>${member.fullName()}</span>
                    </p>
                </li>`;
            }
        }
    }

    else if (member.gender == 'f') {

        if (member.childIndex) {

            if (member.siblingIndex) {
                return `
                <li>
                    <p>
                        <span ${female + i}"><img src="img/${member.firstName}.png"><br>${member.fullName()}</span><span ${male + member.partnerIndex}"><img src="img/${personArray[member.partnerIndex].firstName}.png"><br>${personArray[member.partnerIndex].fullName()}</span>
                    </p>
                    <ul>${displayTree(personArray[member.childIndex], member.childIndex)}</ul>
                </li>${displayTree(personArray[member.siblingIndex], member.siblingIndex)}`;
            }
            else {
                return `
                <li>
                    <p>
                        <span ${female + i}"><img src="img/${member.firstName}.png"><br>${member.fullName()}</span><span ${male + member.partnerIndex}"><img src="img/${personArray[member.partnerIndex].firstName}.png"><br>${personArray[member.partnerIndex].fullName()}</span>
                    </p>
                    <ul>${displayTree(personArray[member.childIndex], member.childIndex)}</ul>
                </li>`;
            }

        }
        else {

            if (member.siblingIndex) {
                return `
                <li>
                    <p>
                        <span ${female + i}"><img src="img/${member.firstName}.png"><br>${member.fullName()}</span>
                    </p>
                </li>${displayTree(personArray[member.siblingIndex], member.siblingIndex)}`;
            }
            else {
                return `
                <li>
                    <p>
                        <span ${female + i}"><img src="img/${member.firstName}.png"><br>${member.fullName()}</span>
                    </p>
                </li>`;
            }
        }
    }
}





// class LastName extends Name {
//     constructor(brand, ln) {
//         super(brand);
//         this.lName = ln;
//     }
//     show() {
//         return this.present() + ', My last name is :' + this.lName;
//     }
// }

// myName = new Name("Adel" , "Hanifa");

// console.log(myName);
// console.log(myName.present());
// console.log(Name.staticName());
// console.log(myName.show());


////  GET SET ////



let person = {
    name: 'Islam',//default
    firstName: 'Arif',
    age: 32,

    //getter using get
    get fullname() {
        return this.firstName + ' '  +  this.name;
    }, 

    //setter using set
    set fullname(value) {//only one parameter
       this.firstName = value;
    }
}
//console.log(person.fullname());
console.log(person.fullname);
person.fullname = 'Cagri';//calling set method/update data inside
console.log(person.fullname);//calling get method



class test  {
    constructor(n1, n2, n3) {
        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;
        // this.n4 = 4;
    }
    changN4 (value){
        this.n4 = value;
    }
    get changingN4 (){
        return this.n4;
    }
    set changingN4 (value){
         this.n4 = value;
    }
}

let numTest = new test (1, 2, 3);
console.log(numTest)

numTest.n4 = 0;

// numTest.changN4 (0);

// numTest.changingN4 = 0;

console.log('After:')
console.log(numTest)

numTest.n4= numTest.n4 +15;

testID.innerHTML = `
n1: ${numTest.n1} n2: ${numTest.n2} n3: ${numTest.n3} n4: ${numTest.n4}`


////////////////