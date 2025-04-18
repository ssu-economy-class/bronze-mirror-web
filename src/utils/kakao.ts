// 카카오 sdk 초기화를 위한 함수입니다.
export const initKakao = () => {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_KAKAO_KEY);
  }
};
