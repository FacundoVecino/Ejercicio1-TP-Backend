import Joi from 'joi';

export const post_taskSchema = Joi.object({
  title: Joi.string().trim().min(3).max(30)
    .required()
    .messages({
      'string.min': 'El campo title debe tener al menos 3 caracteres',
      'string.max': 'El campo title debe tener, como mucho, 30 caracteres',
      'any.required': 'El campo title es requerido',
      '*': 'Revisa el campo title',
    }),
  details: Joi.string().trim().min(5).max(60)
    .required()
    .messages({
      'string.min': 'El campo details debe tener al menos 5 caracteres',
      'string.max': 'El campo details debe tener, como mucho, 60 caracteres',
      'any.required': 'El campo details es requerido',
      '*': 'Revisa el campo details',
    }),
  dateAndTime: Joi.string().regex(/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/).required().messages({
    'string.pattern.base': 'El campo dateAndTime debe tener el formato **/**/**** **:**',
    'any.required': 'El campo dateAndTime es requerido',
    '*': 'Revisa el campo dateAndTime',
  }),
});
