import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import LogoSvgAnim2 from '../components/Navbar/LogoSvgAnim2';

const Loading = () =>  {
    const router = useRouter();
  
    const [loading, setLoading] = useState<boolean>(false);
  
    useEffect(() => {
        const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url: string) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},5000);
  
        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError',  handleComplete)
  
        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })
    
    return loading && (LogoSvgAnim2)
  }

export default Loading