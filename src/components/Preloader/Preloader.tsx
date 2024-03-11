import React, { useEffect } from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import emitter from '../../utils/eventEmitter';
import spinningDots from '../../assets/svg/spinning-dots.svg';

const Preloader: React.FC = () => {
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const handleShowLoader = (state: boolean) => setLoading(state);

    emitter.on('loading', handleShowLoader);

    return () => {
        emitter.off('loading', handleShowLoader);
    }
  }, [])

  if (!loading) return null;

  return (
    <div className="preloader z-50 fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-white">
        <img src={spinningDots} alt='Loading' className='w-20 h-20'/>
      <p className='text-1xl'>Loading</p>
    </div>
  );
};

export default Preloader;
