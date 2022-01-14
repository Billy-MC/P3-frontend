import { useState, useEffect } from 'react';
import SearchBar from '../../../../components/SearchBar';
import { useAppDispatch } from '../../../../hooks/redux';
import styles from './CustomerPageSearchBar.module.scss';
import { changeSearchFilter } from '../../../../store/slices/customerSlice';

const CustomerPageSearchBar = () => {
    const [searchWords, setSearchWords] = useState<string>('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        const id = 'fullName';
        dispatch(changeSearchFilter({ id, searchWords }));
    }, [dispatch, searchWords]);

    return (
        <div className={styles.searchbar}>
            <SearchBar
                placeHolder="Enter Customer Name"
                className={styles.styledInputBase}
                searchByClick={(data: string) => setSearchWords(data.trim())}
            />
        </div>
    );
};

export default CustomerPageSearchBar;
