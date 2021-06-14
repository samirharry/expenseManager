import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Content from '../components/content'
import 'tailwindcss/tailwind.css'
export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
    <Header />
    <Content />
    <Footer />
    </div>
  );
}
