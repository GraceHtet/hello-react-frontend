import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGreetings } from '../store/greetingsSlice';

function Greeting() {
  const [number, setNumber] = useState(1); // [1
  const { greetings, isLoading } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
    setNumber(Math.floor(Math.random() * 4));
  }, [dispatch]);

  let message;
  greetings.forEach((greeting, idx) => {
    if (idx === number) message = greeting.message;
  });

  return <div>{!isLoading && <h1>{message}</h1>}</div>;
}

export default Greeting;
