import "./Video.css";

function Video({ title, channel="Coder Rohan", views, time, verified, children }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://placebear.com/1280/720" alt="Cat"></img>
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified && "✅"}
        </div>
        <div className="views">
          {title}
          {views} views <span>.</span>
          {time}
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Video;
