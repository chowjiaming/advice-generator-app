export type Advice = {
  slip: {
    id: number;
    advice: string;
  };
};

export type AppState = {
  advice: Advice | null;
  isLoading: boolean;
  error?: Error;
};

export type FetchAction = {
  type: string;
  payload?: {
    data?: Advice;
    error?: Error;
  };
};
