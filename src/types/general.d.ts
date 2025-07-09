interface IPaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    totalPages: number;
    page: number;
  };
}
