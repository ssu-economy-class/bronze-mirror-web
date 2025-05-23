import { validateAccessToken } from "@/api/client";
import { useGetUserMe } from "@/api/get/useGetUserMe";
import { Header } from "@/components/Header";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

// Header Footer와 같은 고정 레이아웃
export function Layout() {
  const { data, isLoading, isError } = useGetUserMe();

  if (isLoading) {
    return <></>;
  }

  if (isError) {
    return <></>;
  }

  return (
    <main className="flex flex-col items-start justify-start min-h-screen bg-white grow">
      <Header userInfo={data} />
      <Outlet />
    </main>
  );
}

// 인증이 필요한 화면을 나타내는 Outlet
export default function RequireAuth() {
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setValid(false);
        setLoading(false);
        return;
      }

      const isValid = await validateAccessToken(token);
      if (isValid) {
        setValid(true);
      } else {
        localStorage.clear();
        setValid(false);
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading)
    return (
      <section className="min-h-screen min-w-screen">
        <Loader2 className="animate-spin" />
      </section>
    );

  if (!valid) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
