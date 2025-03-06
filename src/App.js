import Video from "./components/Video";
import "./App.css";
import videos from "./data/data.js";
function App() {
  
  return (
    <div className="App">
      <div>Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          verified={video.verfied}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
        ></Video>
      ))}
    </div>
  );
}

export default App;
