import SearchBar from '../../../../components/SearchBar';
import styles from './ProductPageSearchBar.module.scss';

const ProductPageSearchBar = () => (
    <div>
        <SearchBar
            placeHolder="Search by product name"
            className={styles.input}
            searchByClick={(data: string) => data}
        />
    </div>
);

export default ProductPageSearchBar;
