import { useState, useEffect } from 'react';

const TARGET_DATE = '2026-06-11T16:00:00'; 

export const useCountdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(TARGET_DATE) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatValue = (value) => value.toString().padStart(2, '0');

  return {
    dias: formatValue(timeLeft.dias),
    horas: formatValue(timeLeft.horas),
    minutos: formatValue(timeLeft.minutos),
    segundos: formatValue(timeLeft.segundos),
  };
};