declare module '@apiverve/neverhaveiever' {
  export interface neverhaveieverOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface neverhaveieverResponse {
    status: string;
    error: string | null;
    data: NeverHaveIEverData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface NeverHaveIEverData {
      statement: null | string;
  }

  export default class neverhaveieverWrapper {
    constructor(options: neverhaveieverOptions);

    execute(callback: (error: any, data: neverhaveieverResponse | null) => void): Promise<neverhaveieverResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: neverhaveieverResponse | null) => void): Promise<neverhaveieverResponse>;
    execute(query?: Record<string, any>): Promise<neverhaveieverResponse>;
  }
}
