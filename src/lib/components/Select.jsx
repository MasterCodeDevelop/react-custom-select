import React, { useState } from 'react'
import './Select.scss';

export default function Select({data, name}) {
  const [dropDowon, setDropDown] = useState(false);
  const selectRef = React.useRef(null);
  const selected = (value) => {
    setDropDown(false);
    selectRef.current.value = value;
  }

  return (
    <div className="custom-select">
      <select ref={selectRef}>
        {data.map( (e,index) => {
          return <option key={index} value={e[name]} >{e[name]}</option> 
        })}
      </select>
      <div className="select-selected" onClick={()=>{setDropDown(!dropDowon)}}>
        { selectRef.current? selectRef.current.value: data[0][name] }
      </div>
      <div className={"select-items "+(dropDowon?"":"select-hide")}>
        {data.map( (e,index) => {
          return <div onClick={()=> selected(e[name]) } key={index} value={e[name]} >{e[name]}</div> 
        })}
      </div>
    </div>
  )
}