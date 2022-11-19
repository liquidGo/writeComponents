import React from 'react';
import { connect } from 'react-redux'

interface IButtonComponentProps {
}

const ButtonComponent: React.FunctionComponent<IButtonComponentProps> = (props: any) => {
    console.log(props, 'props')
    // const { dispatch, countData } = props
    // console.log(countData, 'dispatch')
    return (
        <>
            按钮
            {/* <button onClick={() => {dispatch({ type: 'ADD', payload: [{ a: 1 }, { b: 2 }] })}}>异步回来的值</button> */}
        </>
    );
};
const mapStateToProps = (state: any) => {
    return {
        countData: state.counter
    }
}

export default connect(mapStateToProps)(ButtonComponent);
