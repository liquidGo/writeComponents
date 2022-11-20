import React from 'react';
import classNames from 'classnames';

export enum ButtonType {
    Primary = 'primary',
    Defautl = 'default',
    Danger = 'danger',
    Link = 'link'
}

export enum ButtonSize {
    Large = 'lg',
    small = 'sm',
}

interface IButtonProjectProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string
}

type NativeButtonProps = IButtonProjectProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = IButtonProjectProps & React.AnchorHTMLAttributes<HTMLElement>
type ButtonInterface = Partial<NativeButtonProps & AnchorButtonProps>
const ButtonProject: React.FunctionComponent<ButtonInterface> = (props) => {
    const {
        className,
        disabled,
        size,
        btnType,
        children,
        href,
        ...restProps
    } = props
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })
    if (btnType === ButtonType.Link && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }

};

ButtonProject.defaultProps = {
    btnType: ButtonType.Defautl,
    disabled: false
}
export default ButtonProject;
