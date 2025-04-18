// 카카오 SDK를 이용한 로그인 방식입니다. 팝업 형태이므로 따로 redirectUrl이 필요하지않습니다.

export const kakaoLogin = (): Promise<{
  kakaoId: number;
  nickname?: string;
  profileImage?: string;
}> => {
  return new Promise((resolve, reject) => {
    if (!window.Kakao) return reject(new Error("Kakao SDK not loaded"));

    window.Kakao.Auth.login({
      scope: "profile_nickname",
      success() {
        window.Kakao.API.request({
          url: "/v2/user/me",
          success(response) {
            const kakaoId = response.id;
            const nickname = response.kakao_account?.profile?.nickname;
            const profileImage =
              response.kakao_account?.profile?.profile_image_url;
            resolve({ kakaoId, nickname, profileImage });
          },
          fail(err) {
            reject(err);
          },
        });
      },
      fail(err) {
        reject(err);
      },
    });
  });
};
