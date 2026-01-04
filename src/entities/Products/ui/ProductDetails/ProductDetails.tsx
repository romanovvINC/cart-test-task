import cls from './ProductsList.module.scss';
import clsx from "clsx";
import {ProductCard} from "../ProductCard/ProductCard";
import {useEffect, useState} from "react";
import {IProduct} from "../../model/types/product";
import {getProducts} from "../../../../app/services/api";
import {Loader} from "shared/ui/Loader/Loader";
import Skeleton from "shared/ui/Skeleton/Skeleton";

interface ProductListProps {
    className?: string
}

export const ProductsList = ({ className }: ProductListProps) => {
    const [products, setProducts] = useState<IProduct[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true)
        getProducts().then((res) => {
            setProducts([...res] as IProduct[]);
        }).finally(() => setIsLoading(false));
    }, [setIsLoading, setProducts])

    if (isLoading) {
        return (
            <div className={clsx([cls.container, cls.loading])}>
                <Loader />
                {
                    Array(20)
                        .fill("")
                        .map((_, index) => (
                            <Skeleton border='20px' height={100} key={index} />
                        ))
                }
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
