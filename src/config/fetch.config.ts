type MethodType = 'GET' | 'POST';

interface IFetchRequest {
  url?: string;
  method?: MethodType;
  revalidate?: number; //seconds
}

export interface IFetchResponse<T> {
  data?: T;
  error?: Error;
}

export default async function fetchConfig<T>({
  url,
  method,
  revalidate,
}: IFetchRequest): Promise<IFetchResponse<T>> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      } as HeadersInit,
      next: { revalidate },
    });

    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }

    const data = await res.json();
    
    return {
      data: data[0],
    };
  } catch (error) {
    return { error: error as Error };
  }
}
