import React, { useState, useEffect } from 'react'
import '../components/TimeStamp.css'

const TimeStamp = () => {

    const [showMessage, setShowMessage] = useState(true)

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const hours = now.getHours();

            // 0 se 10 bajay tak (midnight se subha 11 baje tak)
            
            if (hours < 11) {
                setShowMessage(true);
            } else {
                setShowMessage(false);
            }
        };

        checkTime(); // initial check
        const interval = setInterval(checkTime, 60000); // har 1 min check

        return () => clearInterval(interval);
    }, []);
    
    if (!showMessage) return null;
    
    return (
        <section className='time-message'>
            <div className=''>
                <p className='bg-danger text-white p-1 d-flex align-items-center justify-content-center'>
                  Sorry We are closed right now and will re-open at 11:00 AM
                </p>
            </div>

        </section>
    )
}

export default TimeStamp