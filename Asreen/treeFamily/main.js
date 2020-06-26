// Create a family tree using js class:
// - create Grandparent, parent, children, brother, sister class
// - extend each one from previous one
// - grand parent should have this properties:
// father_name, mother_name, ages, skin_color, religion, country, hair_color, eye color, occupation etc.
// - Parent should have also same or more properties like grand parents but some properties must be come from grand parents as last_name/family name, eye/hair color, religion etc
// - Children, brother and sister class also should have properties from parent and grandparents with their own unique properties
class GrandParent {
    constructor(father_name, mother_name, age, skin_color, country, hair_color, eye_color, occupationF, occupationM) {
        this.family_name = 'Ilyas';
        this.father_name = father_name;
        this.mother_name = mother_name;
        this.age = age;
        this.skin_color = skin_color;
        this.country = country;
        this.hair_color = hair_color;
        this.eye_color = eye_color;
        this.occupationF = occupationF;
        this.occupationM = occupationM;
    }
    fullNameF() {
        return this.father_name + ' ' + this.family_name;
    }
    fullNameM() {
        return this.mother_name + ' ' + this.family_name;
    }
}

GrandParent1 = new GrandParent('Jalal', 'Zoohor', 60, 'brown', 'Germany', 'blond', 'brown', 'Engineer', 'Teacher');
gID.innerHTML += `<h5>${GrandParent1.fullNameF()}</h5>`;
gM.innerHTML += `<h5>${GrandParent1.fullNameM()}</h5>`;

class Parent extends GrandParent {
    constructor(father_name, mother_name, numOfChildren, MarriageDate) {
        super(father_name, mother_name);
        this.numOfChildren = numOfChildren;
        this.MarriageDate = MarriageDate;
    }
}
let parent2 = new Parent('Dlofan', 'Asreen', 2, '2007');
console.log(parent2);
mId.innerHTML += `<h5>${parent2.fullNameM()}</h5>`;
fId.innerHTML += `<h5>${parent2.fullNameF()}</h5>`;

class Aunt {
    constructor(auntName, husbandName) {
        this.auntName = auntName;
        this.husbandName = husbandName;
        this.family_name = 'Ganim';
    }
}
let auntClass = new Aunt('Alaa', 'Nedaa');
aId.innerHTML += `<h5>${auntClass.husbandName} ${auntClass.family_name}</h5>`;
ahId.innerHTML += `<h5>${auntClass.auntName} ${auntClass.family_name}</h5>`;

class Uncle extends GrandParent {
    constructor(uncleName, uncleWife) {
        super(uncleName, uncleWife);
    }
}
let uncleClass = new Uncle('Sinan', 'Lara');
uwId.innerHTML += `<h5>${uncleClass.fullNameM()}</h5>`;
uId.innerHTML += `<h5>${uncleClass.fullNameF()}</h5>`;

class Children extends Parent {
    constructor(childName, brother, age1, age2) {
        super(childName, brother);
        this.age1 = age1;
        this.age2 = age2;
    }
}
let child = new Children('Ary', 'Andy', 14, 11);
aryId.innerHTML += `<h5>${child.fullNameF()}</h5>`;
andyId.innerHTML += `<h5>${child.fullNameM()}</h5>`;


function modalInfo() {
    seeInfo.innerHTML = `<h2>Grand parent</h2>
    <h3>Grantfather:${GrandParent1.fullNameF()}</h3>
    <h3>Grantmother:${GrandParent1.fullNameM()}</h3>
    <h3>Age:${GrandParent1.age}</h3>
    <h3>Skin color:${GrandParent1.skin_color}</h3>
    <h3>Country:${GrandParent1.country}</h3>
    <h3>Hair color:${GrandParent1.hair_color}</h3>
    <h3>Eye color:${GrandParent1.eye_color}</h3>
    <h3>Occupation grantfather:${GrandParent1.occupationF}</h3>
    <h3>Occupation grantmother:${GrandParent1.occupationM}</h3>
    <h2>Parent</h2>
    <h3>Father:${parent2.fullNameF()}</h3>
    <h3>Mother:${parent2.fullNameM()}</h3>
    <h3>chlidren:${parent2.numOfChildren}</h3>
    <h3>Marriage date:${parent2.MarriageDate}</h3>
    <h2>Children</h2>
    <h3>Child1:${child.fullNameF()}</h3>
    <h3>Child2:${child.fullNameM()}</h3>
    <h3>Age of child1:${child.age2}</h3>
    <h3>Age of child2:${child.age1}</h3>
    `

}
modalInfo();

