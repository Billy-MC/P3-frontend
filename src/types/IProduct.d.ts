export default interface IProduct {
    sku?: string;
    productName: string;
    category: string;
    price: string | undefined;
    quantity: string | undefined;
    description: string;
}
