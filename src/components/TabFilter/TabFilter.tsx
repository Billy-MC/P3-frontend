import { Tab, Tabs, Box } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import styles from './TabFilter.module.scss';

interface IFilter {
    name: string;
    filterEventHandler: () => void;
}

interface ITabFilter {
    filter: IFilter[];
}

const TabFilter: React.FC<ITabFilter> = (props) => {
    const { filter } = props;
    const [value, setValue] = useState(filter[0].name);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const buttons = filter.map((e) => (
        <Tab
            className={styles.buttonGroup}
            disableRipple
            label={e.name}
            value={e.name}
            key={e.name}
            onClick={e.filterEventHandler}
            sx={{ textTransform: 'capitalize' }}
        />
    ));

    return (
        <Box sx={{ width: '100%' }} className={styles.buttonGroup}>
            <Tabs
                value={value}
                textColor="inherit"
                onChange={handleChange}
                aria-label="wrapped label tabs example"
            >
                {buttons}
            </Tabs>
        </Box>
    );
};

export default TabFilter;
