import HomePage from "@/page/home/page";
import ImmersePage from "@/page/immerse/page";
import { LandingPage } from "@/page/landing/page";
import LoginPage from "@/page/login/page";
import MirrorPage from "@/page/mirror/page";
import UserPage from "@/page/user/page";
import RequireAuth, { Layout } from "@/route/outlet";
import { Route, Routes } from "react-router-dom";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/landing" element={<LandingPage />} />
      {/* 인증하지 않아도 되는 페이지 */}
      <Route element={<Layout />}></Route>
      {/* 인증해야 접근할 수 있는 페이지 */}
      <Route element={<RequireAuth />}>
        <Route element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/immerse" element={<ImmersePage />} />
          <Route path="/mirror" element={<MirrorPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
