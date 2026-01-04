import cls from './ProductList.module.scss';
import clsx from "clsx";
import {ProductCard} from "../ProductCard/ProductCard";
import {useEffect, useState} from "react";
import {IProduct} from "../../model/types/product";
import {getProducts} from "../../../../app/services/api";
import {Loader} from "../../../../shared/ui/Loader/Loader";

interface ProductListProps {
    className?: string
}

export const ProductList = ({ className }: ProductListProps) => {
    const [products, setProducts] = useState<IProduct[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true)
        getProducts().then((res) => {
            setProducts(res.data as IProduct[]);
        }).finally(() => setIsLoading(false));
    }, [setIsLoading, setProducts])

    if (isLoading) {
        return (
            <div className={cls.loadingContainer}>
                <Loader />
            </div>
        )
    }

    if (products) {
        return (
            <div className={clsx(cls.container, className)}>
                {
                    products.map((i) => (
                        <ProductCard product={i} />
                    ))
                }
            </div>
        )
    }
};
