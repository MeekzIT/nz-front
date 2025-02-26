import fetchConfig from '@/config/fetch.config';

interface HomeResponse {
  floor: number;
  count: number;
}

interface ApiResponse {
  data?: HomeResponse[];
}

export const HomeSchemas = {
  async schemaHome(): Promise<HomeResponse[]> {
    const response = await fetchConfig<ApiResponse>({
      url: `/schema/available`,
      method: 'GET',
    });

    return (response.data ?? []) as HomeResponse[];
  },
};
