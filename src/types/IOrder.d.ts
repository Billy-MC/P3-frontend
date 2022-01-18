enum orderStatus {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    CANCELED = 'CANCELED',
    REJECTED = 'REJECTED',
}
export interface IProduct {
    sku: string;
    quantity: number;
    price: number;
}
export interface ICustomerInfo {
    name: { type: string };
    email: { type: string };
}

export interface IOrderUpdate {
    id: string;
    body: {
        status: orderStatus;
    };
}

export default interface IOrder {
    orderId: string;
    customerInfo: ICustomerInfo;
    products: IProduct[];
    dateCreated: Date;
    status: orderStatus;
}
