import { DisplayColumn } from '@models/display-column.model';

export interface DisplayRow<T> {
  columns: DisplayColumn[];
  rowData: T;
}
