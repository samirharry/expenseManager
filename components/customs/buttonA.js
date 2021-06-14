import Link from 'next/link'
export default function ButtonA({href='#',text,type = 'green-300'}){
const myClass = `cursor-pointer   p-2 pl-8 pr-8 rounded-3xl border-2 bg-${type}`;
return(
    <Link href={href}>
        <div  className={myClass}>
    <a > {text} </a>
        </div>
    </Link>
 );
};