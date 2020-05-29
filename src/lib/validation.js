const BaseJoi = require('@hapi/joi');
const Joi = BaseJoi.extend(require('@hapi/joi-date'));

exports.validateRegisterUser = async (body) => {
  const schema = Joi.object().keys({
    e_mail: Joi.string().required(),
    pw: Joi.string().required(),
    name: Joi.string().required(),
    grade: Joi.number().required(),
    classNum: Joi.number().required(),
    number: Joi.number().required(),
    major: Joi.string().required(),
  });

  try {
    return await schema.validate(body).error;
    
  } catch(error) {
    throw error;
  }
}

exports.vaildateSharingCompany = async (userData) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    image: Joi.string().required(),
    location: Joi.string().required(),
    instructions: Joi.string().required(),
    requirement: Joi.string().required(),
    additions: Joi.string().required(),
    annualSalary: Joi.string().required(),
    welfare: Joi.string().required(),
  });

  try {
    return await schema.validate(userData).error;

  } catch(error) {
    throw error;
  }
}