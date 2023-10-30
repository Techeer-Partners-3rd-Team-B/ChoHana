// 로그인한 사용자는 proteted route를 볼 수 있고
// 로그인 안 한 사용자는 로그인 페이지로 리디렉션

import { Navigate } from "react-router-dom";
import { auth } from "../routes/firebase";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser; // 로그인되어있는 유저의 값을 주거나 null 반환
  console.log(user);
  if (user === null) {
    // null 이면 로그인 페이지로
    return <Navigate to="/login" />;
  }
  return children;
}
