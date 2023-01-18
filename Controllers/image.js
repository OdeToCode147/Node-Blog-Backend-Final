const LgImgData = (req, res) => {
  res.send([
    {
      img: "https://pbs.twimg.com/media/Fj8MJhtakAAmeLV?format=jpg&name=large",
      text: "You loved is doomed",
      type: "Hollywood",
      date: "12 August 2022",
    },
  ]);
};
const SmImgData = (req, res) => {
  res.send([
    {
      img: "https://pbs.twimg.com/media/Fj8NNmTaEAETVo8?format=jpg&name=small",
      text: "You loved is doomed",
      type: "Hollywood",
      date: "12 August 2022",
    },
    {
      img: "https://pbs.twimg.com/media/Fj8NNmTaEAETVo8?format=jpg&name=small",
      text: "You loved is doomed",
      type: "Hollywood",
      date: "12 August 2022",
    },
  ]);
};

module.exports.getLgImgData = LgImgData;
module.exports.getSmImgData = SmImgData;
