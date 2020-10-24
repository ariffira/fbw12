 var myFunctions = {
    multiply: function (num1, num2) { 
        return num1+'*'+num2+'='+(num1*num2);
    },
    devide: function (num1, num2) { 
        return num1+'/'+num2+'='+(num1/num2);
    },
    subtract: function (num1, num2) { 
        return num1+'-'+num2+'='+(num1-num2);
    },
    addition: function (num1, num2) { 
        return num1+'+'+num2+'='+(num1+num2);
    }
};
module.exports = myFunctions