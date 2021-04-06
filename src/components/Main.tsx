import React, {FC} from 'react';

const Main: FC = () => {
  const test = true;
  if (test) throw new Error("Main fails");
  return (
    <main className="content">Mail</main>
  );
}

export default Main;
