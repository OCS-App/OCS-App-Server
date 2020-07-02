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
