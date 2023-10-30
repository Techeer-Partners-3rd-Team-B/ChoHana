import { auth } from "./firebase";

export default function Home() {
  const logOut = () => {
    auth.signOut(); // 로그아웃 시킴
  };
  return (
    <h1>
      <button onClick={logOut}>Log Out</button>
    </h1>
  );
}