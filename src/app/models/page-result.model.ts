export interface PageResult<T> {
  pageIndex: number;
  pageSize: number;
  orderBy: string;
  orderDirection: string;
  canNext: boolean;
  canPrevious: boolean;
  canFirst: boolean;
  canLast: boolean;
  totalItems: number;
  pagedItems: T[];
}
