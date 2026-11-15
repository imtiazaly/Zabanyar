interface ReaderTextProps {
  text: string;
  onWordClick: (word: string) => void;
}

const wordPattern = /^[\p{L}\p{M}]+(?:['’\-][\p{L}\p{M}]+)*$/u;

function ReaderText({ text, onWordClick }: ReaderTextProps) {
  const parts = text.split(/([\p{L}\p{M}]+(?:['’\-][\p{L}\p{M}]+)*)/gu);

  return (
    <p className="whitespace-pre-wrap text-base leading-9">
      {parts.map((part, index) =>
        wordPattern.test(part) ? (
          <button
            key={index}
            type="button"
            onClick={() => onWordClick(part)}
            className="rounded-sm text-inherit transition-colors hover:bg-brand-100 hover:text-brand-700 focus-visible:bg-brand-100"
          >
            {part}
          </button>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </p>
  );
}

export default ReaderText;
