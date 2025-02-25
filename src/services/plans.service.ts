import fetchConfig from '@/config/fetch.config';

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
