// Module
const Joi = require('@hapi/joi');

// Register Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        userName: Joi.string().min(6).max(255).required(),
        firstName: Joi.string().min(3).max(255).required(),
        lastName: Joi.string().min(3).max(255).required(),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required(),
        passwordConfirmation: Joi.string().valid(Joi.ref('password')).required(),
        confirmEmail: Joi.string().valid(Joi.ref('email')).required()
    });
    return schema.validate(data);
};

// Exports
module.exports.registerValidation = registerValidation;