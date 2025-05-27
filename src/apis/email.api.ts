import axios from 'axios';

type Email = {
  name: string;
  email: string;
  project: string;
}

export const budgetMail = async ({ name, email, project }: Email) => {
  const apiUrl = `${import.meta.env.PUBLIC_EMAIL_API}/send-email`;
  const response = await axios.post(apiUrl, { name, email, project });
  return response.data;
};
