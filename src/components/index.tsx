import React from 'react';
import Button, { ButtonSize, ButtonType } from '../components/buttons/index'
import ButtonProject from './buttons/project';
import { Alert, AlertType } from './Components'
import '../styles/index.scss'


interface IIndexProps {
}


const Index: React.FunctionComponent<IIndexProps> = (props) => {
    console.log(props, '以接口当做泛型')
    return (
        <>
            <div>
                <Button
                    onClick={() => { alert('我一定行') }}
                >我一定行</Button>
                <Button
                    btnType={ButtonType.Danger}
                >冲</Button>
                <Button
                    disabled={true}
                >我一定行</Button>
                <Button
                    btnType={ButtonType.Primary}
                    size={ButtonSize.Large}
                >我一定行</Button>
                <Button
                    btnType={ButtonType.Link}
                    href="http://www.baidu.com"
                >我一定行</Button>
                手写：
                <ButtonProject
                    btnType={ButtonType.Primary}
                    onClick={() => { alert('SUCCESS') }}
                >我一定可以</ButtonProject>
            </div><hr />
            <div>
                <Alert
                    title='加油'
                    content='我一定行'
                    type={AlertType.Danger}
                />
                <Alert
                    title='加油'
                    content='我一定行'
                    type={AlertType.Success}
                />
            </div>
        </>
    );
};

export default Index;
