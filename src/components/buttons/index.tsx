import React from 'react';
// import { connect } from 'react-redux'
import classNames from 'classnames';

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}
export enum ButtonType {
    Primary = 'primary',
    Defautl = 'default',
    Danger = 'danger',
    Link = 'link'
}
interface IButtonComponentProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}

type NativeButtonProps = IButtonComponentProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = IButtonComponentProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const ButtonComponent: React.FunctionComponent<ButtonProps> = (props: any) => {
    console.log(props, 'props')

    const {
        className,
        btnType,
        disabled,
        size,
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
    // return (
    //     <>
    //         {/* <button onClick={() => {dispatch({ type: 'ADD', payload: [{ a: 1 }, { b: 2 }] })}}>异步回来的值</button> */}
    //     </>
    // );
};
ButtonComponent.defaultProps = {
    disabled: false,
    btnType: ButtonType.Defautl,

}
// const mapStateToProps = (state: any) => {
//     return {
//         countData: state.counter
//     }
// }

// export default connect(mapStateToProps)(ButtonComponent);
export default ButtonComponent
