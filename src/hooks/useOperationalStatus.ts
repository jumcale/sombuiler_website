import { useState, useEffect, useCallback } from 'react';

interface OperationalStatus {
  isOpen: boolean;
  statusText: string;
  nextOpening: string;
  currentTime: Date;
}

function getNextOpening(currentDate: Date): string {
  const day = currentDate.getDay();
  const hour = currentDate.getHours();
  
  if (day === 5) {
    return 'Saturday at 12:00 AM';
  }
  
  if (day === 6 && hour < 24) {
    return 'Now';
  }
  
  return 'Saturday at 12:00 AM';
}

export function useOperationalStatus(): OperationalStatus {
  const [status, setStatus] = useState<OperationalStatus>(() => ({
    isOpen: false,
    statusText: 'Checking...',
    nextOpening: '',
    currentTime: new Date(),
  }));

  const checkStatus = useCallback(() => {
    const now = new Date();
    const day = now.getDay();
    
    let isOpen: boolean;
    
    if (day === 5) {
      isOpen = false;
    } else if (day >= 0 && day <= 6) {
      isOpen = day !== 5;
    } else {
      isOpen = false;
    }
    
    const statusText = isOpen ? 'Open Now' : 'Closed Now';
    const nextOpening = isOpen ? 'Open 24 Hours' : getNextOpening(now);
    
    setStatus({
      isOpen,
      statusText,
      nextOpening,
      currentTime: now,
    });
  }, []);

  useEffect(() => {
    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, [checkStatus]);

  return status;
}
