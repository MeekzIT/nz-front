import fetchConfig from '@/config/fetch.config';

export const PlansService = {
  async plansList(revalidate?: number) {
    return await fetchConfig<PlansListItem[]>({
      url: `tariffs/get-available-plans`,
      method: 'GET',
      revalidate,
    });
  },
};
