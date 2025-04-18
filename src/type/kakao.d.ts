export {};

declare global {
  interface KakaoAuthSuccess {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    token_type: string;
    scope: string;
    refresh_token_expires_in: number;
  }

  interface KakaoUserProfile {
    nickname?: string;
    profile_image_url?: string;
    thumbnail_image_url?: string;
  }

  interface KakaoUserAccount {
    email?: string;
    profile?: KakaoUserProfile;
    has_email?: boolean;
    is_email_valid?: boolean;
    is_email_verified?: boolean;
  }

  interface KakaoUserResponse {
    id: number;
    connected_at?: string;
    kakao_account?: KakaoUserAccount;
  }

  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Auth: {
        login: (options: {
          scope?: string;
          success: (authObj: KakaoAuthSuccess) => void;
          fail: (err: Record<string, unknown>) => void;
        }) => void;
      };
      API: {
        request: (options: {
          url: string;
          success: (res: KakaoUserResponse) => void;
          fail: (err: Record<string, unknown>) => void;
        }) => void;
      };
    };
  }
}
