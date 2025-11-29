"use client";
import Editor from "@/components/Editor";
import React, { useState } from "react";

function QuestionForm() {
  const [value, setValue] = useState("");
  return (
    <>
      {/* {value} */}
      <Editor
        value={value}
        onChange={(v) => setValue(v)}
        label="Any Question?"
      />
    </>
  );
}

export default QuestionForm;
