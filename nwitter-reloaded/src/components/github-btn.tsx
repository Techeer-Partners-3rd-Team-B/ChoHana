import {
  GithubAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import styled from "styled-components";
import { auth } from "../routes/firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GithubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider); // 팝업으로 로그인
      // await signInWithRedirect(auth, provider); // 리디렉션(페이지 이동)으로 로그인
      navigate("/");
    } catch (error) {
      // 깃허브 이메일과 그냥 이메일이 같은 경우
      console.log(error);
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src="/github-mark.svg" />
      Continue with Github
    </Button>
  );
}
