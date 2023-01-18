const LatestData = (req, res) => {
  res.send([
    {
      id: 4,
      img: "https://nypost.com/wp-content/uploads/sites/2/2022/09/steven-spielberg-comp.jpg?quality=75&strip=all",
      title: "With “The Fabelmans,” Steven Spielberg Finally Phones Home",
      details:
        "The director’s new film is his most personal film as it's his POV of retelling of his parents’ troubled marriage and leads the pack in the Oscar race.",
      date: "Dec 24, 2022",
      type: "Hollywood",
    },
    {
      id: 1,
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/16B9B/production/_128138039_gettyimages-1306394025.jpg.webp",
      title: "Apple and Tesla: Tech shares tumble amid supply issues",
      details:
        "Apple and Tesla stocks have tumbled over growing concerns about delays in their production lines in China.",
      date: "Nov 12, 2022",
      type: "Technology",
    },
    {
      id: 4,
      img: "https://images.livemint.com/img/2022/10/14/1140x641/Fitness_Kettlebell_drag_1665756112967_1665756133437_1665756133437.jpg",
      title: "Strengthen your core with the kettlebell drag",
      details:
        "The plank has had an interesting evolution since it came to prominence as one of the must-do exercises for the core. From static holds, to adding weights, to creating different angles using the high plank or the low plank and now one of those plank-plus exercises that you should add to your fitness routine is the kettlebell drag.",
      date: "Nov 12, 2022",
      type: "Fitness",
    },
    {
      id: 1,
      img: "https://deadline.com/wp-content/uploads/2022/12/SS-Rajamouli-04.jpg?w=681&h=383&crop=1",
      title: "“Nothing Is Impossible”: ‘RRR’ Director S.S. Rajamouli",
      details:
        "Director S.S. Rajamouli Talks About His Spectacular Action Epic And Reveals That The Ecstatic U.S. Reception Has Inspired A Sequel.",
      date: "Dec 24 2022",
      type: "Bollywood",
    },
    {
      id: 2,
      img: "https://imageio.forbes.com/specials-images/imageserve/60dcf705322bcd8f2c1b5c65/Meatless-Burgers-Gain-In-Popularity/960x0.jpg?format=jpg&width=960",
      title: "Vegan Orders Are Surging, Delivery Services Report",
      details:
        "Vegan and plant-based foods are the fastest growing category of foods that people are ordering in, according to leading food-delivery companies in the United States, Canada and the United Kingdom.",
      date: "Nov 12, 2022",
      type: "Food",
    },
    {
      id: 4,
      img: "https://www.computerweekly.com/visuals/German/article/business-innovation-1-adobe.jpg",
      title:
        "Tech Nation Libra programme selects 35 scaleups for second cohort",
      details:
        "35 technology scaleups were selected to join entrepreneurial network Tech Nation’s second Libra cohort in September, a programme designed to support under-represented startup founders.",
      date: "Nov 12, 2022",
      type: "Technology",
    },
  ]);
};
const LatestArticleData = (req, res) => {
  res.send([
    {
      id: 2,
      img: "https://www.chicagotribune.com/resizer/8g5w2Z8iejPpJcj-m9QgG5hEyBI=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/QRW34PACA5FRJMGILGASTKF3XA.jpg",
      title: "Killers of the Flower Moon Release Confirmed",
      details:
        "Martin Scorsese Confirms His Leonardo DiCaprio-Starrer 'Killers of the Flower Moon' is Set to Release in a 'Few Months' ",
      date: "Dec 24, 2022",
      type: "Hollywood",
    },
    {
      id: 4,
      img: "https://c.ndtvimg.com/2022-01/6c8hvi_almonds_625x300_12_January_22.jpg",
      title: "The health benefits of almonds",
      details:
        "Research by the British Journal of Nutrition found that consuming nuts as part of a healthy diet, around 55g a day, is not only beneficial for reducing the risk of heart disease but also has limited risk of weight gain.",
      date: "Nov 12, 2022",
      type: "Food",
    },
    {
      id: 2,
      img: "https://www.royalmint.com/globalassets/__rebrand/_structure/new-one-pound/new-one-pound.jpg?width=2147483647",
      title: "UK tech ecosystem reaches $1tn valuation",
      details:
        "n March, the UK tech sector reached a $1tn valuation after growing 42% between 2020 and 2021 as a result of greater investment into software and digital companies at the start of the pandemic.",
      date: "Nov 12, 2022",
      type: "Technology",
    },
  ]);
};

module.exports.getLatestData = LatestData;
module.exports.getLatestArticleData = LatestArticleData;
