export type AxiosQueryResponse<DataType> = {
  isLoading: boolean;
  isError: boolean;
  data: DataType;
};
