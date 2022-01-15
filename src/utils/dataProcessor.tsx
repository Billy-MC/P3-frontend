import { TStatus } from '../components/StatusBar/StatusBar';

export const capitalizor = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const quantityToStatus = (quantity: number): TStatus => {
    if (quantity === 0) return 'OUT OF STOCK';
    if (quantity <= 10) return 'LIMITED';
    return 'IN STOCK';
};
