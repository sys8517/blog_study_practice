"use client";

import React from "react";

//카드 맨 바깥 레이아웃
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={"Card"}
    style={{
      width: "290px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    }}
    {...props}
  />
));
Card.displayName = "Card";

const CardImage = React.forwardRef(
  (
    { alt, src, className, ...props }: CircleAvatarProps,
    ref: React.Ref<HTMLImageElement>
  ) => (
    <img
      ref={ref}
      className={"CardImage"}
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
      src={src}
      {...props}
    />
  )
);
CardImage.displayName = "CardImage";

//카드 바디 부분 (레이아웃)
const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={"CardBody"}
    style={{
      display: "flex",
      flexDirection: "column",
    }}
    {...props}
  />
));
CardBody.displayName = "CardBody";
interface CircleAvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
}

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={"CardTitle"}
    style={{
      overflow: "hidden",
      color: " var(--gray-g-91111, #111)",
      textOverflow: "ellipsis",
      fontFamily: "Pretendard",
      fontSize: "18px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "normal",
      marginBottom: "10px",
      marginTop: "0px",
    }}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={"CardContent"}
    style={{
      width: "290px",
      color: "var(--gray-g-91111, #111)",
      fontFamily: "Pretendard",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400",

      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
      WebkitLineClamp: 2,

      //   overflow: "hidden",
      //   textOverflow: "ellipsis",
      //   whiteSpace: "nowrap",
      //   lineHeight: 1.2,
      //   height: "2.4em",
      //   textAlign: "left",
      //   wordWrap: "break-word",
      //   display: "-webkit-flex",
      //   WebkitFlexDirection: "column",
    }}
    {...props}
  />
));
CardContent.displayName = "CardContent";

//카드 아래 부분 (카드 푸터 레이아웃)
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={"CardFooter"}
    style={{
      display: "flex",
      flexDirection: "row",
      gap: "8px",
    }}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const CardTag = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={"CardTag"}
    style={{
      width: "100%",
      padding: "7px 12px",
      borderRadius: "5px",
      background: "#ECECEC",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      boxSizing: "border-box",
      fontSize: "15px",
    }}
    {...props}
  />
));
CardTag.displayName = "CardTag";

export {
  CardBody,
  CardContent,
  CardImage,
  CardTitle,
  CardTag,
  Card,
  CardFooter,
};
