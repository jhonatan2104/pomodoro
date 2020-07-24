import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().required('Name missing'),
  workIntervalMin: yup.number().required().integer('Number must be an integer'),
  workIntervalSec: yup
    .number()
    .required()
    .lessThan(60, 'Seconds must be less than 60')
    .integer('Number must be an integer'),
  shortIntervalMin: yup
    .number()
    .required()
    .integer('Number must be an integer'),
  shortIntervalSec: yup
    .number()
    .required()
    .lessThan(60, 'Seconds must be less than 60')
    .integer('Number must be an integer'),
  longIntervalMin: yup.number().required().integer('Number must be an integer'),
  longIntervalSec: yup
    .number()
    .required()
    .lessThan(60, 'Seconds must be less than 60')
    .integer('Number must be an integer'),
  cicleSize: yup
    .number()
    .required()
    .integer('Number of cicles must be an integer'),
});

export default validationSchema;
