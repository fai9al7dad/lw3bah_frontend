export class Answer {
  body?: string;
  isCorrect?: boolean;

  constructor({
    body,
    isCorrect,
  }: {
    body?: string;
    isCorrect?: boolean;
  } = {}) {
    this.body = body;
    this.isCorrect = isCorrect;
  }
}
