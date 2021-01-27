/**
 * functional components
 */
// data is the properties coming from App.js: props
const Multiplication = (data)=> {
    // own data
    let c = 5; // state data
    // props is data from another components
    let {a,b,option} = data //destructuring way
    console.log(a,b,option);
    return <h1>Result {option} of {a}*{b}*{c} is: {a*b*c}</h1>
}
const Division = ()=> {
    //
}

// subtraction
// addition

export {Multiplication, Division};