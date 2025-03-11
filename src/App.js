import Video from "./components/Video";
import "./App.css";
import videos from "./data/data.js";
import PlayButton from "./components/PlayButton/PlayButton.js";


function App() {
  
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div>Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          verified={video.verfied}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
        >
          <PlayButton 
            onPlay={()=>console.log('Playing',video.title)} 
            onPause={()=>console.log('Paused',video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}

      <div style={{clear:"both"}}>
      {/*<PlayButton message="play-msg" onPlay={()=>console.log('Play')} onPause={()=>console.log('Paused')}>Play</PlayButton>*/}
      {/*<PlayButton message="pause-msg" onSmash={()=>alert('Play')}>Pause</PlayButton>*/}
      </div>
      

    </div>
  );
}

export default App;
