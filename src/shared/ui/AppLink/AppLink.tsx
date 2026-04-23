import { ReactNode } from "react";
import { Link, LinkProps } from "react-router";
import cls from "./AppLink.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
    children: ReactNode;
    theme?: AppLinkTheme;
    className?: string;
}

export const AppLink = ({ children, className = "", theme = AppLinkTheme.PRIMARY, ...rest }: AppLinkProps) => {
    return (
        <Link className={classNames(cls.appLink, {}, [className, cls[theme]])} {...rest}>
            {children}
        </Link>
    )
}
