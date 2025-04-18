export {};

declare global {
  interface Window {
    Kakao: {
      isInitialized: () => boolean;
      init: (key: string) => void;
      Auth: {
        login: (options: {
          scope?: string;
          success: (res: any) => void;
          fail: (err: any) => void;
        }) => void;
      };
      API: {
        request: (options: {
          url: string;
          success: (res: any) => void;
          fail: (err: any) => void;
        }) => void;
      };
    };
  }
}
