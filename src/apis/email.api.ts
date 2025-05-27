import axios from 'axios';

type Email = {
  name: string;
  email: string;
  project: string;
}

export const budgetMail = async ({ name, email, project}: Email ) => {
  const response = await axios.post(import.meta.env.PUBLIC_EMAIL_API, {
    name,
    email,
    project
  });
  return response.data;
};
