interface IDocument {
  id: string;
  url: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}

export type { IDocument };
