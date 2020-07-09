// Grand Parent class/super
class Person {
    constructor(firstName, age, skin_color, gender, hair_color, eye_color, generation) {
        this.firstName = firstName;
        this.age = age;
        this.skin_color = skin_color;
        this.gender = gender;
        this.hair_color = hair_color;
        this.eye_color = eye_color;
        this.generation = generation;
    }
    infoP() {
        return this.firstName + '<br>age:' + this.age + '<br>skin color:' + this.skin_color + '<br>Hair color:' + this.hair_color + '<br>gender:' + this.gender;
    }
}

class GrandParent extends Person {

    constructor(firstName, age, skin_color, gender, country, hair_color, eye_color, generation) {
            //properties
            super(firstName, age, skin_color, gender, hair_color, eye_color, generation)

            this.familyName = 'Khan';
            this.religion = 'Muslim';
            this.country = country;
        }
        //methods
    infoGr() {
        return this.firstName + ' ' + this.familyName + '<br>' + this.infoP();
    }
}

class Parent extends GrandParent {
    constructor(firstName, age, skin_color, gender, country, hair_color, eye_color, marriageDate, generation) {
        super(firstName, age, skin_color, gender, country, hair_color, eye_color, generation);
        // this.father_name = father_name;
        // this.mother_name = mother_name;
        this.marriageDate = marriageDate;
        this.childOf = true;

    }
    infoPar() {
        return this.infoGr() + '<br>marriageDate:' + this.marriageDate + '<br>child of:' + this.childOf;
    }
}

class Child extends Parent {
    constructor(firstName, age, skin_color, gender, country, hair_color, eye_color, eduLevel, generation) {
        super(firstName, age, skin_color, gender, country, hair_color, eye_color, generation);
        this.eduLevel = eduLevel;
    }
    infoCh() {
        return this.infoPar() + '<br>eduLevel:' + this.eduLevel;
    }
}
let grandFather = new GrandParent('Ali', 80, 'light brown', 'male', 'Syria', 'black', 'brown', 1);
console.log(grandFather)
let grandMother = new GrandParent('Amina', 75, 'white', 'female', 'Syria', 'Blue', 'Dark Brown', 1);
console.log(grandMother)
let father = new Parent('Khaled', 40, 'light Brown', 'male', 'Syria', 'Dark Brown', 'Blue', '15.08.1982', 2);
console.log(father)
let mother = new Person('Fatima', 35, 'white', 'female', 'Black', 'Green', 2)
console.log(mother);
let fChild = new Child('Ali', 18, 'white', 'male', 'Syria', 'DarkBrown', 'Blue', 'Uni', 3);
let sChild = new Child('Nour', 16, 'White', 'Female', 'Syria', 'Black', 'Brown', 'high school', 3)
let children = [fChild, sChild]

grandParentId.innerHTML = `
<div class="card-deck">
    <div class="card bg-primary">
        <div class="card-body text-center">
            <p class="card-text">${grandFather.infoGr()}</p>
        </div>
    </div>
    <div class="card bg-danger">
        <div class="card-body text-center">
            <p class="card-text">${grandMother.infoGr()}</p>
        </div>
    </div>
</div>`;
parentId.innerHTML = `
<div class="card-deck">
    <div class="card bg-primary">
        <div class="card-body text-center">
            <p class="card-text">${father.infoPar()}</p>
        </div>
    </div>
    <div class="card bg-danger">
        <div class="card-body text-center">
            <p class="card-text">${mother.infoP()}</p>
        </div>
    </div>
</div>`;
children.map(childInfo);

function childInfo(item) {
    if (item.gender == 'male')
        childId.innerHTML += `<div class="card bg-primary">
    <div class="card-body text-center">
        <p class="card-text">${item.infoCh()}</p>
    </div>
</div>`
    else childId.innerHTML += `<div class="card bg-danger">
<div class="card-body text-center">
    <p class="card-text">${item.infoCh()}</p>
</div>
</div>`
}

// let grandparent = new GrandParent('Noman', 80, 'Morocco', 'Brown');
// console.log(grandparent);
// grandParentId.innerHTML =
//     `<h3>GrandParent info </h3>
//  <h4>Full-Name: ${grandparent.fullname()}</h4>
//  <h4>Age: ${grandparent.age}</h4>
//  <h4>Religion: ${grandparent.religion}</h4>
//  <h4>Eye-color ${grandparent.eye_color}</h4>
// `;
// // Parent class

// let parent = new Parent('Saif', 55, 'Germany', 'Blue', '14-04-1980');
// console.log(parent);
// parentId.innerHTML =
//     `<h3>Parent info </h3>
//  <h4>Full-Name: ${parent.fullname()}</h4>
//  <h4>Age: ${parent.age}</h4>
//  <h4>Religion: ${parent.religion}</h4>
//  <h4>Eye-color ${parent.eye_color}</h4>
//  <h4>Marriage date: ${parent.marriageDate}</h4>
// `;