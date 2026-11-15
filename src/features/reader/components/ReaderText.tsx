interface ReaderTextProps {
  text: string;
  onWordClick: (word: string, sentence: string) => void;
}

const wordPattern = /^[\p{L}\p{M}]+(?:['’\-][\p{L}\p{M}]+)*$/u;

function getSentenceAt(text: string, position: number): string {
  const sentences = text.match(/[^.!?]+(?:[.!?]+|$)/g) ?? [];

  let currentPosition = 0;

  for (const sentence of sentences) {
    const endPosition = currentPosition + sentence.length;

    if (position >= currentPosition && position < endPosition) {
      return sentence.trim();
    }

    currentPosition = endPosition;
  }

  return text.trim();
}

function ReaderText({ text, onWordClick }: ReaderTextProps) {
  const parts = text.split(/([\p{L}\p{M}]+(?:['’\-][\p{L}\p{M}]+)*)/gu);

  let currentPosition = 0;

  return (
    <p className="whitespace-pre-wrap text-base leading-9">
      {parts.map((part, index) => {
        const position = currentPosition;
        currentPosition += part.length;

        if (wordPattern.test(part)) {
          return (
            <button
              key={index}
              type="button"
              onClick={() => onWordClick(part, getSentenceAt(text, position))}
              className="rounded-sm text-inherit transition-colors hover:bg-brand-100 hover:text-brand-700 focus-visible:bg-brand-100"
            >
              {part}
            </button>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </p>
  );
}

export default ReaderText;
