import { Loader } from 'shared/ui/Loader/Loader';
import cls from './ProductCard.module.scss';
import clsx from "clsx";

interface ProductCardProps {
    className?: string
}

export const ProductCard = ({ className }: ProductCardProps) => (
    <div className={clsx(cls.container, className)}>
        <img />
    </div>
);
