export default ({ text, onClick }) => (
  <div className="container" onClick={onClick}>
    <img src="/static/images/headstone.svg" />
    <div className="text-container">
      <label>Caldwell Tanner</label>
      <div className="text-inner-container">
        <span>{text}</span>
      </div>
    </div>
    <style jsx>{`
    .container {display: block; margin-bottom: 20px; position: relative; cursor: pointer; user-select: none;}
    .text-container {position: absolute; top: 50px; right: 35px; bottom: 30px; left: 60px; display: flex; flex-direction: column; justify-content: center; align-items: center;}
    .text-container label {font-size: 30px; color: #5a5a5a; font-weight: bold; text-transform: uppercase;}
    .text-container .text-inner-container {flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;}
    .text-container .text-inner-container span {font-size: 24px; font-family: "Comic Sans MS", cursive, sans-serif;}
    img {display: block; width: 300px;}
    `}</style>
  </div>
)