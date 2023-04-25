export interface Request {
  post<R = any>(params: Request.RequestData): Promise<R>;
  put<R = any>(params: Request.RequestData): Promise<R>;
  get<R = any>(params: Request.RequestData): Promise<R>;
  delete<R = any>(params: Request.RequestData): Promise<R>;
}

export namespace Request {
  export type RequestData<D = unknown> = {
    uri: string;
    data?: D;
    dataAs?: 'json' | 'params' | 'formdata';
    bearerToken?: string;
  }
}