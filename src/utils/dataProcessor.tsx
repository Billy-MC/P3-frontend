import { TStatus } from '../components/StatusBar/StatusBar';

export const capitalizor = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const DateToDDMMMYYYYHHMM = (date: Date): string => {
    const dateSplited = new Date(date).toString().split(' ');
    const output: string = [dateSplited[2], dateSplited[1], dateSplited[3], dateSplited[4]].join(
        ' ',
    );
    return output;
};

export const quantityToStatus = (quantity: number): TStatus => {
    if (quantity === 0) return 'OUT OF STOCK';
    if (quantity <= 10) return 'LIMITED';
    return 'IN STOCK';
};
