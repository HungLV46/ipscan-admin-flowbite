export interface ListResponse<T> {
  items: T[];
  paging: {
    total: number;
    limit: number;
    offset: number;
  };
}
