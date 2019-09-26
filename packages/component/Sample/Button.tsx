import React, { FC, useState } from 'react';

type SampleButtonProps = {
  num: number;
};

export const SampleButton: FC<SampleButtonProps> = ({ num }) => {
  const [state, setstate] = useState(num);
  return <button onClick={() => setstate(state + 1)}>{state}</button>;
};
