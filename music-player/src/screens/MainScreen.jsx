import React from "react";
import MusicList from "../components/MusicList";
import Player from "../components/Player";

const MainScreen = () => {
  let musicArr = [
    { id: 1, name: "Channa-Mereya", src: "/musics/channa-mereya.mp3" },
    { id: 2, name: "Ankhiya-gulaab", src: "/musics/ankhiya-gulaab.mp3" },
    { id: 3, name: "Dekha tenu", src: "/musics/dekha-tenu.mp3" },
    { id: 4, name: "Ishq na kare", src: "/musics/ishq-na-kare.mp3" },
    { id: 5, name: "Jana Samjho na", src: "/musics/jana-samjho.mp3" },
    { id: 6, name: "Veere di wedding", src: "/musics/veere-di-wedding.mp3" },
  ];

  return (
    <div className="h-screen relative flex flex-col gap-6 px-8">
      {musicArr.map((elem) => {
        return <MusicList key={elem.id} elem={elem} />;
      })}

      <Player />
    </div>
  );
};

export default MainScreen;
