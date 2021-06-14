import Head from 'next/head'
import Footer from '../../components/footer'
import Header from '../../components/header'
import 'tailwindcss/tailwind.css'
export default function ExpenseRegister() {
  return (
    <div className="flex flex-col h-screen justify-between">
    <Header />
    <div className='mb-auto '>
     Este es un footer
    </div>
    <Footer />
    </div>
  );
}
