class GrandParent {
    constructor(firstName, lastName, age, skinColor, religion, country, hairColor, eyeColor, occupation, image, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.skinColor = skinColor;
        this.religion = religion;
        this.country = country;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor
        this.occupation = occupation;
        this.profilePicture = image;
        this.gender = gender;
    }

    show = () => {
        let firstPrefix;
        let secondPrefix;
        let suffix = 'Name';
        let suffix2 = 'Pic';
        let result;
        let result2;

        if(this.gender == 'male') {
            secondPrefix = 'father';
        } else {
            secondPrefix = 'mother'
        }

        if(this.age >= 55) {
            firstPrefix = 'grand'
        } else {
            firstPrefix = undefined
        }

        console.log(firstPrefix)

        if (firstPrefix == undefined) {
            result = document.getElementById(secondPrefix + suffix)
            result2 = document.getElementById(secondPrefix + suffix2)
        } else {
            secondPrefix = secondPrefix.replace(/^\w/, c => c.toUpperCase())
            result = document.getElementById(firstPrefix + secondPrefix + suffix)
            result2 = document.getElementById(firstPrefix + secondPrefix + suffix2)
        }

        console.log(result)
        console.log(this.profilePicture)

        result.innerHTML = this.firstName; 
        result2.src = this.profilePicture;
        return console.log('Done')
    }
}

class Parent extends GrandParent {
    constructor(marriageDate, firstName, lastName, age, skinColor, religion, country, hairColor, eyeColor, occupation, image, gender) {
        super(firstName, lastName, age, skinColor, religion, country, hairColor, eyeColor, occupation, image, gender)
        this.marriageDate = marriageDate;
    }

}

class Children extends Parent {
    constructor(nthChildren, marriageDate, firstName, lastName, age, skinColor, religion, country, hairColor, eyeColor, occupation, image, gender) {
        super(marriageDate, firstName, lastName, age, skinColor, religion, country, hairColor, eyeColor, occupation, image, gender)
        this.NumberOfChildren = nthChildren
    }
}

class Brother extends Children {
    constructor(alter, nthChildren, marriageDate, firstName, lastName, age, skinColor, religion, country, hairColor, eyeColor, occupation, image, gender) {
        super(nthChildren, marriageDate, firstName, lastName, age, skinColor, religion, country, hairColor, eyeColor, occupation, image, gender)
        this.isTheOldest = alter
    }
}

class Sister extends Brother {
    constructor(alter, nthChildren, marriageDate, firstName, lastName, age, skinColor, religion, country, hairColor, eyeColor, occupation, image, gender) {
        super(alter, nthChildren, marriageDate, firstName, lastName, age, skinColor, religion, country, hairColor, eyeColor, occupation, image, gender)
    }
}

let grandFather = new GrandParent('Andrew', 'Lichter', 72, 'White', 'None', 'France', 'Bald', 'Green', 'Banker', 'images/grandpa.jpg', 'male')
let grandMother = new GrandParent('Marie', 'Slow', 68, 'White', 'None', 'England', 'White', 'Green', 'Resting', 'images/gandma.jpg', 'female')
let father = new Parent('12.12.12', 'Mark', 'Kaiser', 43, 'Dark', 'Islam', 'Marocco', 'Black', 'Blue', 'Driver', 'images/gandma.jpg','male')
let mother = new Parent('12.12.12', 'Valerie', 'Kaiser', 43, 'Dark', 'Islam', 'Marocco', 'Black', 'Blue', 'Driver', 'images/gandma.jpg' ,'female')
let children = new Children(2, 'Not Married', undefined, undefined, undefined, 'Olive', 'Christian', 'Spain', 'Blonde', 'Brown', 'Student', '',)
let son = new Brother(true, 'None', 'Not Married', 'Brian', 'Colfield', 17, 'Olive', 'Christian', 'Germany', 'Blonde', 'Brown', 'Student', '',)
let daughter = new Sister(false, 'None', 'Not Married', 'Sara', 'Colfield', 15, 'Olive', 'Christian', 'Germany', 'Red', 'Blue', 'Student', '',)

let family = new Array(grandMother, grandFather, father, mother)

console.log(grandFather)

family.map(item => item.show())