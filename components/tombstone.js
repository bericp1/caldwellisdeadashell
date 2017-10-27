export default ({ text, onClick }) => (
  <div className="container" onClick={onClick}>
    <img src="/static/images/headstone.svg" />
    <div className="text-container">
      <span>{text}</span>
    </div>
    <style jsx>{`
    .container {display: block; margin-bottom: 20px; position: relative; cursor: pointer; user-select: none;}
    .text-container {position: absolute; top: 10px; right: 35px; bottom: 0; left: 60px; display: flex; justify-content: center; align-items: center;}
    .text-container span {font-size: 20px; font-family: "Comic Sans MS", cursive, sans-serif}
    img {display: block; width: 300px;}
    `}</style>
  </div>
)