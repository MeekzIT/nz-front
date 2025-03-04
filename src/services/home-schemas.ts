import fetchConfig from '@/config/fetch.config';

interface HomeResponse {
  floor: number;
  count: number;
}

interface ApiResponse {
  data?: HomeResponse[];
}

type AppartementData = {
  id: number;
  name: string;
  value: string;
  appartementId: number;
  createdAt: string | null;
  updatedAt: string | null;
};

type Appartement = {
  id: number;
  floorId: number;
  in_stock: boolean;
  price: string;
  room_count: string;
  square_meter: string;
  coordinates: string;
  image_black_white: string;
  image_design: string;
  createdAt: string | null;
  updatedAt: string | null;
  AppartementData: AppartementData[];
};

type Floor = {
  id: number;
  floor: number;
  order: number;
  imageUrl: string;
  image_scheme: string;
  createdAt: string | null;
  updatedAt: string | null;
  Appartements: Appartement[];
};

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
  async homeSchemas(id: string): Promise<Floor[]> {
    const response = await fetchConfig<ApiResponse>({
      url: `/schema?id=${id}`,
      method: 'GET',
    });

    return (response.data ?? []) as Floor[];
  },
};
