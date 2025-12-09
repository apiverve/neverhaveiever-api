declare module '@apiverve/neverhaveiever' {
  export interface neverhaveieverOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface neverhaveieverResponse {
    status: string;
    error: string | null;
    data: NeverHaveIEverData;
    code?: number;
  }


  interface NeverHaveIEverData {
      statement: string;
  }

  export default class neverhaveieverWrapper {
    constructor(options: neverhaveieverOptions);

    execute(callback: (error: any, data: neverhaveieverResponse | null) => void): Promise<neverhaveieverResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: neverhaveieverResponse | null) => void): Promise<neverhaveieverResponse>;
    execute(query?: Record<string, any>): Promise<neverhaveieverResponse>;
  }
}
