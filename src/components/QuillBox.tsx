import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function QuillBox({ setValue }: any) {
  return <ReactQuill theme="snow" onChange={setValue} />;
}
