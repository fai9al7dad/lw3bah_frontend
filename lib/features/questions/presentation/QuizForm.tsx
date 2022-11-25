import React from "react";
import { TextInput } from "../../../common/components/atoms";
import MarkedQuestion from "./MarkedQuestion";

export default function QuizForm() {
  const answersLen = 4;
  return (
    <form>
      <TextInput label="عنوان السؤال" />
      {[...Array(answersLen)].map((_, i) => (
        <MarkedQuestion
          key={i}
          className={"mt-2"}
          isCorrect={i == 1 ? true : false}
        >
          {i}
        </MarkedQuestion>
      ))}
    </form>
  );
}
