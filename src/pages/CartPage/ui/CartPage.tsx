import React, { memo } from 'react';
import {ProductsList} from "../../../entities/Products";
import cls from './MainPage.module.scss';

const MainPage = () => {
    return (
        <div className={cls.container}>
            <ProductsList />
        </div>
    );
};

export default memo(MainPage);
