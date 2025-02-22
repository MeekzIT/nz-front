import fetchConfig from '@/config/fetch.config';

export const AboutService = {
  async aboutUs() {
    return await fetchConfig<any>({
      url: `/about-us`,
      method: 'GET',
    });
  },
};
