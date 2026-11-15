import { useState } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Textarea from "../../../components/ui/Textarea";

function ReaderPage() {
  const [text, setText] = useState("");
  const [readerText, setReaderText] = useState("");

  function handleStartReading() {
    setReaderText(text.trim());
  }

  return (
    <AppLayout>
      <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Zabanyar</h1>
          <p className="mt-3 text-muted">
            Learn English naturally, one sentence at a time.
          </p>
        </header>

        <Card>
          <h2 className="mb-2 text-xl font-semibold">English Reader</h2>
          <p className="mb-6 text-sm text-muted">
            Paste any English text from your book to get started.
          </p>

          <Textarea
            label="Your text"
            placeholder="Paste your English text here..."
            rows={7}
            value={text}
            onChange={(event) => setText(event.target.value)}
          />

          <div className="mt-4 flex justify-end">
            <Button
              size="lg"
              disabled={!text.trim()}
              onClick={handleStartReading}
            >
              Start Reading
            </Button>
          </div>
        </Card>

        {readerText && (
          <Card className="mt-6">
            <h2 className="mb-4 text-lg font-semibold">Your Reading</h2>
            <p className="whitespace-pre-wrap leading-8">{readerText}</p>
          </Card>
        )}
      </main>
    </AppLayout>
  );
}

export default ReaderPage;
