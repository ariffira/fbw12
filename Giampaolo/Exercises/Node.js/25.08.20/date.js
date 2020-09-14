let gettingDate = new Date();
let day = gettingDate.getDate();
let month = gettingDate.getMonth();
let year = gettingDate.getFullYear();

module.exports.showDate = () => {
    return `The current Date is: ${day}/${month}/${year}.`
}