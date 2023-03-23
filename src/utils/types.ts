type Advice = {
  advice: string;
  slip_id: string;
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
