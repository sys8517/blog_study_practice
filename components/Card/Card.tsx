"use client";

import React from "react";

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
      width: "100%",
    }}
    {...props}
  />
));
CardBody.displayName = "CardBody";
interface CircleAvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
}
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
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
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

const CardTag = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={"CardTag"}
    style={{
      padding: "7px 15px",
      display: " flex",
      borderRadius: "5px",
      background: "#ECECEC",
    }}
    {...props}
  />
));
CardTag.displayName = "CardTag";

export { CardBody, CardContent, CardImage, CardTitle, CardTag };
