export default () => (
  <div className="links">
    <div className="left">
      <a href="http://pca.st/qoqQ#t=2875">A dumb idea</a> brought to you by&nbsp;
      <a href="https://twitter.com/caldy">Caldwell Tanner</a> and&nbsp;
      <a href="https://twitter.com/AtNathanYaffe">Nathan Yaffe</a>, the hosts of&nbsp;
      <a href="http://whatshouldwedraw.com/">What Should we Draw</a> and&nbsp;
      <a href="http://www.drawfee.com/">Drawfee</a>.
    </div>
    <div className="right">
      <a href="https://github.com/bericp1/caldwellisdeadashell">Made</a> by <a href="https://twitter.com/bericp1">a person</a>.
    </div>
    <style jsx>{`
      .links {
        padding: 0 20px 10px 20px;
        font-size: 0.8em;
        line-height: 2.1;
        color: #A9A9A9;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .links .left {margin-bottom: 10px;}


      @media screen and (min-width: 600px) {
          .links {
              flex-direction: row;
              justify-content: space-between;
              align-items: flex-end;
          }
          .links .left {
              text-align: left;
              margin-right: 20px;
              margin-bottom: 0;
          }
          .links .right {
              text-align: right;
          }
      }
    `}</style>
  </div>
)