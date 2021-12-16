import { ReactNode, FC } from 'react';

type UserPageProps = {
    children: ReactNode;
};

const UserPage: FC<UserPageProps> = ({ children }) => (
    <div>
        {children}
        <p>UserPage</p>
    </div>
);

export default UserPage;
