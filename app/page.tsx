import Image from "next/image";
import styles from "./page.module.css";
import {
  CardBody,
  CardContent,
  CardImage,
  CardTag,
  CardTitle,
} from "@/components/Card/Card";

export default function Home() {
  return (
    <>
      <CardBody>
        <CardImage
          alt="사진 이미지"
          src="https://picsum.photos/200/240"
          style={{ width: "290px", height: "133px", borderRadius: "5px" }}
        ></CardImage>
        <CardTitle>블로그 글 제목</CardTitle>
        <CardContent>
          {`블로그 작성 내용이다 블로그 작성 내용이다 블로그 작성 내용이다 블로그 작성 내용이다블로그 작성 내용이다
          블로그 작성 내용이다블로그 작성 내용이다블로그 작성 내용이다블로그 작성 내용이다블로그 작성 내용이다블로그 작성 내용이다`}
        </CardContent>
        <div style={{ display: "flex", gap: "8px" }}>
          {["태그1", "태그2", "태그3"].map((item) => {
            return <CardTag key={item}>{`#${item}`}</CardTag>;
          })}
        </div>
      </CardBody>
    </>
  );
}
