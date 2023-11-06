import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../routes/firebase";
import Tweet from "./tweet";
import { Unsubscribe } from "firebase/auth";

export interface ITweet {
  id: string;
  photo?: string;
  tweet: string;
  userId: string;
  username: string;
  createdAt: number;
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    // 스크롤바 없애는거 (니꼬는 안 해도 없던데)
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export default function Timeline() {
  const [tweets, setTweet] = useState<ITweet[]>([]);
  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchTweets = async () => {
      const tweetsQuery = query(
        collection(db, "tweets"),
        orderBy("createdAt", "desc"), // createAt을 기준으로 내림차순
        limit(25)
      );
      // const snapshot = await getDocs(tweetsQuery);
      // const tweets = snapshot.docs.map((doc) => {
      //   const { tweet, createdAt, userId, username, photo } = doc.data();
      //   return { tweet, createdAt, userId, username, photo, id: doc.id };
      // }); // 각 문서 내부의 데이터
      // 위 코드 대신에 실시간 연결 생성하는 함수 만들거임
      // 사용자가 우리 화면을 벗어나면 이벤트 리스너를 꺼야함 (켜놓으면 계속 비용 지불 중)
      unsubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          const { tweet, createdAt, userId, username, photo } = doc.data();
          return { tweet, createdAt, userId, username, photo, id: doc.id };
        });
        setTweet(tweets);
      }); // 문서를 한 번만 가져오는 대신 쿼리에 리스너 추가 (삭제, 편집, 생성 되었다고 하면 데이터를 추출)
    };
    fetchTweets();
    return () => {
      // 로그아웃 했거나 다른 창에 있을 때 켤 필요 없어서 구독 취소
      unsubscribe && unsubscribe();
    };
  }, []);
  return (
    <Wrapper>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </Wrapper>
  );
}
