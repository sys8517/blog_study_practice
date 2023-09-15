import Image from "next/image";
import styles from "./page.module.css";
import {
  Card,
  CardBody,
  CardContent,
  CardFooter,
  CardImage,
  CardTag,
  CardTitle,
} from "@/components/Card/Card";

export default function Home() {
  return (
    <>
      <Card>
        <CardImage
          alt="사진 이미지"
          src="https://picsum.photos/200/240"
          style={{ width: "290px", height: "133px", borderRadius: "5px" }}
        />
        <CardBody>
          <CardTitle>블로그 글 제목</CardTitle>
          <CardContent>
            {`블로그 작성 내용이다 블로그 작성 내용이다 블로그 작성 내용이다 블로그 작성 내용이다블로그 작성 내용이다
          블로그 작성 내용이다블로그 작성 내용이다블로그 작성 내용이다블로그 작성 내용이다블로그 작성 내용이다블로그 작성 내용이다`}
          </CardContent>
        </CardBody>
        <CardFooter>
          {["해시태그1", "해시태그2", "해시태그3"].map((item) => {
            return <CardTag key={item}>{`#${item}`}</CardTag>;
          })}
        </CardFooter>
      </Card>
    </>
  );
}
