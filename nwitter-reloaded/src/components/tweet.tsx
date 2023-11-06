import styled from "styled-components";
import { ITweet } from "./timeline";
import { auth, db, storage } from "../routes/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`;

const Column = styled.div``;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 15px;
`;

const Username = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

const Payload = styled.p`
  margin: 10px 0px;
  font-size: 18px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const EditButton = styled.button`
  background-color: #1d9bf0;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: tomato;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Tweet({ username, photo, tweet, userId, id }: ITweet) {
  const user = auth.currentUser;
  const onDelete = async () => {
    const ok = confirm("Are you sure you want to delete this tweet?");
    if (!ok || user?.uid !== userId) return;
    try {
      await deleteDoc(doc(db, "tweets", id));
      if (photo) {
        const photoRef = ref(storage, `tweets/${user.uid}/${id}`);
        await deleteObject(photoRef);
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  // Challenge🌈🌈 수정 (edit) 기능 만들기 - TODO💥💥 프롬프트 말고 모달로
  const onEdit = async () => {
    const ok = confirm("Are you sure you want to edit this tweet?");
    if (!ok || user?.uid !== userId) return;
    const tweet = await prompt("업데이트할 내용을 입력해주세요");
    if (!tweet) return;
    try {
      await updateDoc(doc(db, "tweets", id), {
        tweet: tweet,
      });
    } catch (e) {
    } finally {
    }
  };

  return (
    <Wrapper>
      <Column>
        <Username>{username}</Username>
        <Payload>{tweet}</Payload>
        {user?.uid === userId ? (
          <Buttons>
            <EditButton onClick={onEdit}>Edit</EditButton>
            <DeleteButton onClick={onDelete}>Delete</DeleteButton>
          </Buttons>
        ) : null}
      </Column>
      <Column>{photo ? <Photo src={photo} /> : null}</Column>
    </Wrapper>
  );
}
