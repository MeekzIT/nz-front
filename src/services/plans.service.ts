import axios from 'axios';
import fetchConfig from '@/config/fetch.config';

import { ContactUsRequest } from './model';

export const AboutService = {
  async aboutUs() {
    return await fetchConfig<any>({
      url: `/about-us`,
      method: 'GET',
    });
  },
};

export const ProjectsService = {
  async getAllProjectsData() {
    return await fetchConfig<any>({
      url: `/projects`,
      method: 'GET',
    });
  },

  async getProjectData(id: number) {
    return await fetchConfig<any>({
      url: `/projects/${id}`,
      method: 'GET',
    });
  },
};

export const ContactUsService = {
  async aboutUs(data: ContactUsRequest): Promise<any> {
    console.log('Sent Data:', data);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response:', response.data);

      return response.data;
    } catch (error) {
      console.error('Error:', error);

      throw error;
    }
  },
};
