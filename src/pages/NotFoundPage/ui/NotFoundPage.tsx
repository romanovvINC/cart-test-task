import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page>
            <div className={classNames(cls.NotFoundPage, {}, [className])}>
                {t('Страница не найдена')}
            </div>
        </Page>
    );
};

export default memo(NotFoundPage);
