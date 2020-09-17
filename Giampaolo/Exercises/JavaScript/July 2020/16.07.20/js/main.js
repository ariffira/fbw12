// Error handling
let showAge = () => {
    let age = ageId.value;
    console.log(typeof age);
    try {
        if (age == '') throw 'Its empty!'
        if (isNaN(age)) throw 'Please give only Number';
        age = Number(age);
        if (age < 18) throw 'You are not Adult!';
        if (age > 110) throw 'You are Kidding!';
        result.innerHTML = '<h1>Your age is: ' + age + ' </h1>'; //nothing wrong

        if (age > 80) {
            result.innerHTML = '<h1>Your age is: ' + age + ', but i don\'t believe you!</h1>'; //nothing wrong
        }

        if (age > 90) {
            result.innerHTML = '<h1>Your age is: ' + age + ', you are probabely kidding!</h1>'; //nothing wrong
        }
    }
    catch (error) {
        result.innerHTML = '<h1>' + error + ' </h1>'; // if anything failed
    }
    finally {
        result.innerHTML += '<br>Try Again!';
    }
}