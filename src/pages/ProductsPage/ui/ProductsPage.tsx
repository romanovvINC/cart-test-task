import React, {memo, useCallback} from 'react';
import {ProductsList} from "../../../entities/Products";
import cls from './MainPage.module.scss';
import {useNavigate} from "react-router";

const MainPage = () => {
    const navgiate = useNavigate();

    const handleNavigateToProducts = useCallback(() => {
        navgiate('/products')
    }, [navgiate])

    return (
        <div className={cls.container}>
            <h1>Здесь пока пусто</h1>
            <button onClick={handleNavigateToProducts}>Перейти к товарам</button>
        </div>
    );
};

export default memo(MainPage);
