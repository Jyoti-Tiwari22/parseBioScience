import React from 'react';

const MainContent = () => {
  return (
    <main className = "text-white min-h-screen h-screen MainContextImage bg-cover bg-no-repeat bg-center" >
      <div className = "text-center mb-8 w-2/5 relative top-48 left-28" >
        <p className='uppercase text-left text-base'>MORE CELLS, MORE SAMPLES, MORE CLARITY</p>
        <h1 className="text-6xl font-bold mb-4 text-left">Smash the limits of single-cell sequencing</h1>
        <p className="mb-6 text-left text-lg">Combinatorial barcoding technology strips away the limitations and frustrations of yesterday’s single-cell approach. It ditches the specialized instrument, freeing you to pursue unprecedented discoveries. Unleash the potential of single cell.</p>
        <button className="connectButton text-white px-3 py-2 text-lg text-left flex font-medium">Break boundaries with collaborative barcoding →</button>
      </div>

    </main>
  );
};

export default MainContent;
