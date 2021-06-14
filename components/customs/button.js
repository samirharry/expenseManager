import { useCallback } from "react";

export default function Button({text,action,type = 'green-300'}){
const myClass = `cursor-pointer  p-2 pl-8 pr-8 rounded-3xl border-2 bg-${type}`;
return(
    <button onClick={ ()=> action() } className={myClass} > {text} </button>
 );
};