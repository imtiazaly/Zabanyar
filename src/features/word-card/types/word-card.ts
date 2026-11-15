export interface WordCard {
  word: string;
  partOfSpeech: string;
  urduMeaning: string;
  simpleEnglishMeaning: string;
  contextualMeaning: string;
  exampleSentence: string;
}

export interface WordCardRequest {
  word: string;
  sentence: string;
}

export interface WordCardResponse {
  success: boolean;
  data: WordCard;
}
