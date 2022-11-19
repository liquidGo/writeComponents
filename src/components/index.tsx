import React from 'react';
import Button, { ButtonSize, ButtonType } from '../components/buttons/index'
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
            </div>
        </>
    );
};

export default Index;
