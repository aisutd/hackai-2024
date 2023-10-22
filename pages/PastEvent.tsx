import React from 'react';

function PastEvent() {
  return (
    <div className="flex relative pb-[6rem]">
      <div className="w-1/2 p-4 flex flex-col justify-center">
        <h3 className="text-1xl text-hai-navy text-center my-8">Past Event</h3>
        <h2 className="text-4xl font-bold text-hai-navy text-center">HACK AI 2023</h2>
        <p className="text-lg text-hai-gray text-center p-10 pt-5">
          Lorem ipsum dolor sit amet consectetur. Morbi consectetur habitant purus lacus a mauris elementum eleifend arcu. Sem purus tristique ut praesent adipiscing. Risus eget purus etiam ultrices cursus massa dolor. Ipsum condimentum nunc commodo eget imperdiet turpis. Sed mi lectus laoreet sodales egestas tempor mauris. Tellus in mi facilisi mauris nam ac sit elementum eget. Turpis pellentesque vulputate accumsan eget viverra gravida scelerisque.
        </p>
        <div className="relative z-0">
          <img className="text-center mx-auto mt-10 mb-20 w-full md:w-9/12 z-0" src="/stats.png" alt="about hackai chips" />
        </div>
      </div>
      <div className="w-1/2 p-20 pl-5 flex items-center">
        <div className="mx-auto max-h-full max-w-full">
          <img src="/placeholder.png" alt="Image" className="mx-auto" />
        </div>
      </div>
      <img src="/jagged-bottom.svg" className="absolute bottom-0 h-[6rem] w-[100vw] object-fill"/>
    </div>
  );
}

export default PastEvent;