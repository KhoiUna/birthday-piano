import { wish } from "../initialState";

interface QuoteObj {
  author: string;
  quote: string;
}

export default class Quote {
  static quoteArray: QuoteObj[] = [
    {
      author: "Mark Twain",
      quote: "The secret of getting ahead is getting started.",
    },
    {
      author: "Elon Musk",
      quote:
        "When something is important enough, you do it even if the odds are not in your favor.",
    },
    {
      author: "Dale Carnegie",
      quote:
        "If you want to conquer fear, don't sit home and think about it. Go out and get busy.",
    },
    {
      author: "Oprah Winfrey",
      quote:
        "I don't believe in failure. It is not failure if you enjoyed the process.",
    },
    {
      author: "Helen Keller",
      quote: "Optimism is the faith that leads to achievement.",
    },
  ];

  //Quote generator function
  static getRandomQuote(): QuoteObj {
    if (wish.fromUser) {
      return {
        author: wish.fromUser,
        quote: wish.wishText,
      };
    }

    const random = Math.floor(Math.random() * this.quoteArray.length);
    const quoteObj = this.quoteArray[random];

    return quoteObj;
  }
}
