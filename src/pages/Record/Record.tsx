import { useRef, useState } from "react";
import {
  RecordDescription,
  RecordImage,
  RecordImageWrapper,
  RecordIndicator,
  RecordInputBox,
  RecordWrapper,
  RecrodContainer,
} from "./Record.styled";
import Typography from "@/foundations/Typography";
import Input from "@/components/Input";
import { Status } from "@/types/status";
import TextArea from "@/components/TextArea";

const Record = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // 드래그 속도 조정 (2는 배율)
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const [title, setTitle] = useState("");
  const [titleStatus, setStatus] = useState<Status>("default");
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    if (0 < value.length && value.length > 20) {
      setStatus("error");
    } else {
      setStatus("default");
    }
    setTitle(value);
  };

  const [descript, setDescript] = useState("");
  const [descriptStatus, setDescriptStatus] = useState<Status>("default");
  const handleDescriptChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const {
      currentTarget: { value },
    } = event;
    if (0 < value.length && value.length > 100) {
      setDescriptStatus("error");
    } else {
      setDescriptStatus("default");
    }
    setDescript(value);
  };

  const [recordDay, setRecordDay] = useState("");
  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setRecordDay(value);
  };

  const [recordPlace, setRecordPlace] = useState("");
  const handlePlaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setRecordPlace(value);
  };

  return (
    <RecrodContainer>
      <RecordIndicator />
      <RecordImageWrapper
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        <RecordImage></RecordImage>
        <RecordImage></RecordImage>
        <RecordImage></RecordImage>
        <RecordImage></RecordImage>
        <RecordImage></RecordImage>
      </RecordImageWrapper>
      <RecordWrapper>
        <Typography text="어떤 굳이데이를 보내셨나요?" type="h3" />
        <RecordInputBox>
          <Input
            status={titleStatus}
            placeholder="제목을 입력해주세요."
            handleChange={(event) => handleTitleChange(event)}
            theme="dark"
            value={title}
            messageBoxShow={false}
          />
        </RecordInputBox>
        <RecordDescription>
          <TextArea
            status={descriptStatus}
            placeholder="굳이데이 활동과 계기에 대해 작성해주세요."
            handleChange={(event) => handleDescriptChange(event)}
            theme="dark"
            value={descript}
            messageBoxShow={false}
          />
        </RecordDescription>
        <Typography text="활동 날짜" type="h3" />
        <RecordInputBox>
          <Input
            status="default"
            placeholder="YY / MM / DD"
            handleChange={(event) => handleDayChange(event)}
            theme="dark"
            value={recordDay}
            messageBoxShow={false}
          />
        </RecordInputBox>
        <Typography text="활동 장소" type="h3" />
        <RecordInputBox>
          <Input
            status="default"
            placeholder="장소를 설정해주세요.(선택)"
            handleChange={(event) => handlePlaceChange(event)}
            theme="dark"
            value={recordPlace}
            messageBoxShow={false}
          />
        </RecordInputBox>
        <Typography text="활동 카테고리" type="h3" />
        <RecordInputBox>
          <Input
            status="default"
            placeholder="장소를 설정해주세요.(선택)"
            handleChange={(event) => handlePlaceChange(event)}
            theme="dark"
            value={recordPlace}
            messageBoxShow={false}
          />
        </RecordInputBox>
      </RecordWrapper>
    </RecrodContainer>
  );
};

export default Record;