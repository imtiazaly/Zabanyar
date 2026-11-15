import Card from "../../../components/ui/Card";
import type { WordCard } from "../types/word-card";

interface WordCardPanelProps {
  data: WordCard;
}

function WordCardPanel({ data }: WordCardPanelProps) {
  return (
    <Card>
      <div className="mb-5">
        <h2 className="text-2xl font-bold">{data.word}</h2>
        <span className="text-sm text-muted">{data.partOfSpeech}</span>
      </div>

      <div className="space-y-4">
        <section>
          <h3 className="mb-1 text-sm font-semibold">Urdu Meaning</h3>
          <p dir="rtl" className="text-lg">
            {data.urduMeaning}
          </p>
        </section>

        <section>
          <h3 className="mb-1 text-sm font-semibold">Simple English Meaning</h3>
          <p className="text-sm leading-7">{data.simpleEnglishMeaning}</p>
        </section>

        <section>
          <h3 className="mb-1 text-sm font-semibold">
            Meaning in This Sentence
          </h3>
          <p className="text-sm leading-7">{data.contextualMeaning}</p>
        </section>

        <section>
          <h3 className="mb-1 text-sm font-semibold">Example Sentence</h3>
          <p className="text-sm leading-7">{data.exampleSentence}</p>
        </section>
      </div>
    </Card>
  );
}

export default WordCardPanel;
