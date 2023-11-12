import React from 'react'
import InputField from './InputField';

const Container = (props) => {
    const {control,...rest} = props;
    
    switch(control){
        case 'text':return <InputField {...rest}/>
            default:return null
    }
    
}

export default Container;