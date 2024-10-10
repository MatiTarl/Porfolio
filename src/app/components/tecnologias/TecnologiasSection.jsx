import Css from '../../../ui/tecnologias/Css';
import Express from '../../../ui/tecnologias/Express';
import Html from '../../../ui/tecnologias/Html';
import JavaScript from '../../../ui/tecnologias/JavaScript';
import NodeJs from '../../../ui/tecnologias/NodeJs';
import Postgress from '../../../ui/tecnologias/Postgress';
import React from '../../../ui/tecnologias/React';
import Redux from '../../../ui/tecnologias/Redux';
import Sequelize from '../../../ui/tecnologias/Sequelize';
import Tailwind from '../../../ui/tecnologias/Tailwind';

export default function TecnologiasSection() {
  const svgs = [
    { svg: Css, id: 1 },
    { svg: Express, id: 2 },
    { svg: Html, id: 3 },
    { svg: NodeJs, id: 4 },
    { svg: JavaScript, id: 5 },
    { svg: Postgress, id: 6 },
    { svg: Redux, id: 7 },
    { svg: Sequelize, id: 8 },
    { svg: Tailwind, id: 9 },
    { svg: React, id: 10 },
  ];
  return (
    <main className="items-center justify-center flex flex-col px-2">
      <h1 className="text-2xl md:text-4xl py-3">Tecnologias</h1>
      <div className="w-full grid gap-2 grid-cols-3 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-10 items-center justify-items-center min-h-32 lg:min-h-52">
        {svgs.map((Svg) => {
          return (
            <div
              key={Svg.id}
              className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 
               "
            >
              <Svg.svg
                style={{
                  filter: 'drop-shadow(0px 0px 5px rgba(252, 252, 252, 0.5))',
                }}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
