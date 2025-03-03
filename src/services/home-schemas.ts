import fetchConfig from '@/config/fetch.config';

interface HomeResponse {
  floor: number;
  count: number;
}

interface ApiResponse {
  data?: HomeResponse[];
}

export const HomeAvailableSchemas = {
  async schemaAvailableHome(): Promise<HomeResponse[]> {
    const response = await fetchConfig<ApiResponse>({
      url: `/schema/available`,
      method: 'GET',
    });

    return (response.data ?? []) as HomeResponse[];
  },
};

export const HomeSchemas = {
  async homeSchemas(id: string): Promise<HomeResponse[]> {
    const response = await fetchConfig<ApiResponse>({
      url: `/schema?id=${id}`,
      method: 'GET',
    });

    return (response.data ?? []) as HomeResponse[];
  },
};
