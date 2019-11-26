import { OrderDetail } from '@models/order-detail.model';

export interface Order {
  userId: string;
  orderDetails: OrderDetail[];
}
