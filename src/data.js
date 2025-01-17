/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'Which country has the most time zones?',
      answers: {
        a: 'Russia ',
        b: 'France ',
        c: 'China ',
        d: 'USA ',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Time Zones by Country',
          href: 'https://en.wikipedia.org/wiki/List_of_time_zones_by_country#:~:text=Time%20zones%20of%20a%20country,Antarctica%20and%20all%20other%20counties).',
        },
        // {
        //   text: 'Tyler McGinnis',
        //   href: 'https://ui.dev/var-let-const/',
        // },
      ],
    },
    {
      text: 'Who was the first president of the United States?',
      answers: {
        a: 'Abraham Lincoln',
        b: 'George Washington',
        c: 'Thomas Jefferson',
        d: 'Benjamin Franklin',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'presidents',
          href: 'https://www.whitehouse.gov/about-the-white-house/presidents/',
        },
        // {
        //   text: 'MDN',
        //   href:
        //     'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        // },
      ],
    },
    {
      text: 'Which country has the most islands?',
      answers: {
        a: 'Sweden',
        b: 'Canada',
        c: 'Indonesia',
        d: 'Norway',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Islands by Country',
          href: 'https://worldpopulationreview.com/country-rankings/number-of-islands-by-country',
        },
      ],
    },
    {
      text: "Which gas is most abundant in Earth's atmosphere?",
      answers: {
        a: 'Oxygen',
        b: 'Nitrogen',
        c: 'Carbon',
        d: 'Hydrogen',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Atmosphere',
          href: 'https://www.noaa.gov/jetstream/atmosphere',
        },
      ],
    },
    {
      text: 'How many rings are on the Olympic flag?',
      answers: {
        a: '5',
        b: '6',
        c: '7',
        d: '8',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Olympic Flag',
          href: 'https://olympics.com/ioc/olympic-rings',
        },
      ],
    },
    {
      text: 'What is the capital city of Australia?',
      answers: {
        a: 'Sydney',
        b: 'Melbourne',
        c: 'Perth',
        d: 'Canberra',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Canberra',
          href: 'https://en.wikipedia.org/wiki/List_of_Australian_capital_cities',
        },
      ],
    },
    {
      text: 'Which pop star is known as the "Queen of Pop"?',
      answers: {
        a: 'Madonna',
        b: 'Jennifer Lopes',
        c: 'Lady Gaga',
        d: 'Britney Spears',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Queen of Pop',
          href: 'https://www.grammy.com/news/madonna-albums-songs-celebration-tour-queen-of-pop-legacy-40th-anniversary',
        },
      ],
    },
    {
      text: 'What year did World War II end?',
      answers: {
        a: '1945',
        b: '1940',
        c: '1935',
        d: '1950',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'HTTP',
          href: 'https://www.smarty.com/articles/what-is-http',
        },
      ],
    },
    {
      text: 'In which country were the first Olympic Games held?',
      answers: {
        a: 'Italy',
        b: 'Greece',
        c: 'Iran',
        d: 'France',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Olympic Games',
          href: 'https://en.wikipedia.org/wiki/1896_Summer_Olympics',
        },
      ],
    },
    {
      text: 'Which continent has the most countries?',
      answers: {
        a: 'Africa',
        b: 'Asia',
        c: 'Europa',
        d: 'South America',
      },
      correct: 'a',
      selected: null,
      links: [{}],
    },
  ],
};
