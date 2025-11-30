"use client";
import Button from "@/components/Button";
import Editor from "@/components/Editor";
import Input from "@/components/Input";
import TagCard from "@/components/TagCard";
import React, { useState } from "react";

function QuestionForm() {
  const [value, setValue] = useState("");
  const [tags, setTags] = useState<string[]>(["react", "vue"]);
  const [newTag, setNewTag] = useState("");
  const [error, setError] = useState("");
  let handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setNewTag("");
        setError("");
      } else {
        setError("you are adding existing tag!");
      }
    }
  };
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Ask A New Question?</h1>
      <Input label="Title" text="Describe your question title in short way." />
      <div className="mt-3">
        <Editor
          value={value}
          onChange={(v) => setValue(v)}
          label="Any Question?"
        />
      </div>
      <Input
        onKeyDown={handleEnterPress}
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
        label="Tags"
        text="Please press enter to add a new tag."
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="mt-5 space-x-3">
        {tags.map((tag, i) => (
          <TagCard key={i} href="/filters/react">
            {tag}
          </TagCard>
        ))}
      </div>

      <Button>Create</Button>
    </div>
  );
}

export default QuestionForm;
