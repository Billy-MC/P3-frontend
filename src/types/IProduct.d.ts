export default interface IProduct {
    sku: string;
    productName: string;
    category: string;
    price: number | undefined;
    quantity: number | undefined;
}
