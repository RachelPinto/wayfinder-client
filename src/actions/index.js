import {API_BASE_URL} from '../config';

export const LOG_FORM = 'LOG_FORM'
export const logForm = (formData) => ({
  type: LOG_FORM, formData
});