import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    title: string;
    value: T;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  onChange?: (value: T) => void;
  readonly?: boolean;
  value?: T;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        onChange,
        readonly,
        value,
    } = props;

    const mapOptions = useMemo(() => options?.map(
        (opt) => (
            <option className={cls.selectOption} value={opt.value} key={opt.value}>{opt.title}</option>
        ),
    ), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.selectWrapper, mods, [className])}>
            {label && <span className={cls.selectLabel}>{`${label}>`}</span>}
            <select
                value={value}
                className={classNames(cls.select, mods, [])}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {mapOptions}
            </select>
        </div>
    );
};
