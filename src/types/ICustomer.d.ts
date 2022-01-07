interface Address {
    street?: string;
    city: string;
    postCode: string;
}
enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}
export default interface ICustomer {
    customerId: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    dob: Date;
    notification?: Notification;
    gender: Gender;
    address: Address;
}
