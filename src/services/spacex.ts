import React from "preact/compat";

 const launches = [
    {
      id: "1",
      title: "1",
      description: "1",
      url: "https://th.bing.com/th/id/OIP.lT4m1XPdwkHimHwGJ2WVLQHaEV?rs=1&pid=ImgDetMain",
    },
    {
      id: "3",
      title: "2",
      description: "2",
      url: "https://th.bing.com/th/id/OIP.lT4m1XPdwkHimHwGJ2WVLQHaEV?rs=1&pid=ImgDetMain",
    },
    {
      id: "3",
      title: "3",
      description: "3",
      url: "https://th.bing.com/th/id/OIP.lT4m1XPdwkHimHwGJ2WVLQHaEV?rs=1&pid=ImgDetMain",
    },
  ];

export const getLastesLaunches = async () => {
  return launches;
};

export const getLauchBy = async ( {id}: { id: string} ) => {

const launch = launches.find((launch) => launch.id === id);

if (!launch) {
  throw new Error("Launch not found");
}

return launch;

};
