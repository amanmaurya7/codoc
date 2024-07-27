import WordRotate from "./magicui/word-rotate";

export function WordRotateDemo() {
  return (
    <WordRotate
      className="text-4xl font-bold text-black dark:text-white"
      words={["Build with", "share with"]}
    />
  );
}
