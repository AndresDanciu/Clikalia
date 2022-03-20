import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './__name__.module.scss';

interface typeProp {
    name: string;
    onClick: () => void;
}

const __name__ : React.FC<typeProp> = (props: typeProp) => {
    const { t } = useTranslation();

    const [value, setValue] = useState<string>('');
    /** Solo en caso de que venga nulo */
    // const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Render again
    }, [props]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{t('title')}</div>
            <input value={value} onChange={onChange} id="input-example"  className={styles.container}/>
        </>
    );
};

export default __name__;