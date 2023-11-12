import React, { useState } from 'react';
import Select from 'react-select';
const ReactSelect = (props) => {
  const [values,setValues] = useState([]);
  const options=[
    {label:'option1',value:'option1'},
    {label:'option2',value:'option2'},
    {label:'option3',value:'option3'},
  ]
  //const {label,options} = props;
  return (
    <div>
      <label>Select</label>
      <Select isMulti name={props.name} options={options} values={values} onChange={(option)=>setValues({...values,option})}/>
      {/* <button onClick={()=>console.log(values)}>Submit</button> */}
    </div>
  )
}

export default ReactSelect;