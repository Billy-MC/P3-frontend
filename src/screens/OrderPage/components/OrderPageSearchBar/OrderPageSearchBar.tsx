import SearchBar from '../../../../components/SearchBar';
import styles from './OrderPageSearchBar.module.scss';

const OrderPageSearchBar = () => (
    <div>
        <SearchBar
            placeHolder="Search by order number"
            className={styles.input}
            searchByClick={(data: string) => data}
        />
    </div>
);

export default OrderPageSearchBar;
