export type ICommonState = {
  login: string;
  password: string;
  isFetching?: boolean;
};

export const initialState: ICommonState = {
  login: '',
  password: '',
  isFetching: false,
};
