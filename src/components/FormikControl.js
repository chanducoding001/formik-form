import React from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Select from './Select'
import Radio from './Radio'
import CheckBox from './CheckBox'
import DateField from './DateField'
import ReactSelect from './ReactSelect'
import FinalMultiSelect from './FinalMultiSelect'

const FormikControl = (props) => {
    const {control,...rest} = props;
    
 switch(control){
    case 'input':return <Input {...rest}/>
    case 'textarea': return <TextArea {...rest}/>
    case 'select': return <Select {...rest}/>
    case 'radio': return <Radio {...rest}/>
    case 'checkbox':return <CheckBox {...rest}/>
    case 'date':return <DateField {...rest}/>
   case 'reactSelect':return <ReactSelect {...rest}/>
   case 'multiSelect':return <FinalMultiSelect {...rest}/>
   default:return null
 }
}

export default FormikControl;