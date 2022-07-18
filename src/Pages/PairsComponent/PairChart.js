import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react'
import bgvideo from '../../Assets/Images/trade.mp4'



const PairChart = () => {

    
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);




  return (
    <div>
        <Box>
            <Box className='afterbg' bgcolor='#17293d' borderRadius='12px' padding='1rem'>
                    <video
                        className='videoswidth'
                        playsInline
                        loop
                        muted
                        ref={videoEl} 
                        style={{width:'100%', borderRadius:'12px'}}
                        >
                        <source src={bgvideo} type="video/mp4" />
                    </video>
                </Box>
        </Box>
    </div>
  )
}

export default PairChart;