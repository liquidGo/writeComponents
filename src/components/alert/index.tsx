import React, { useState } from 'react';
import classNames from 'classnames';
import { CloseOutlined } from '@ant-design/icons'
import './index.less'

export enum AlertType {
    Success = 'success',
    Default = 'default',
    Danger = 'danger',
    Warning = 'Warning'
}


interface IAlertProps {
    className?: string,
    title: string,
    content: string
    type?: AlertType,
}

const Alert: React.FunctionComponent<IAlertProps> = (props) => {
    const [close, setClose] = useState<boolean>(false);
    const {
        title,
        content,
        type,
        className,
    } = props
    const classes = classNames('component-alert', className, {
        [`component-alert-${type}`]: type,
        [`component-display-none`]: close
    })
    return (
        <span
            className={classes}
        >
            <div>{title}</div>
            <span>
                {content}

                <CloseOutlined
                    className='button'
                    onClick={() => {
                        setClose(true)
                    }} />
            </span>
        </span>
    );
};
Alert.defaultProps = {
    type: AlertType.Default
}

export default Alert;
