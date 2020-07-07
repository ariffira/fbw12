class Name {
    constructor(urName) {
        this.name = urName;
    }
    present() {
        return " My name is : " + this.name;
    }
    static staticName() {
        return "ADEL!!";
    }
}

class LastName extends Name {
    constructor(brand, ln) {
        super(brand);
        this.lName = ln;
    }
    show() {
        return this.present() + ', My last name is :' + this.lName;
    }
}

myName = new Name("Adel" , "Hanifa");

console.log(myName);
console.log(myName.present());
console.log(Name.staticName());
console.log(myName.show());
