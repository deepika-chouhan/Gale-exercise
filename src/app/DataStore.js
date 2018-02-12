import { observable } from 'mobx'

export default class DataStore {
  // Questionnaire array
  @observable questionArray = [{
    st_id: 100,
    stmt: 'How is your hair feeling?',
    ans_opts: [{
      option: 'oily',
      next_id: 101,
    },
    {
      option: 'dull',
      next_id: 101,
    },
    {
      option: 'good',
      next_id: 102,
    },
    ],
  },
  {
    st_id: 101,
    stmt: 'How many times do you wash your hair ?',
    ans_opts: [{
      option: 7,
      next_id: 103,
    },
    {
      option: 6,
      next_id: 104,
    },
    ],
  },
  {
    st_id: 102,
    stmt: 'That is great !!',
    // if no answer options its a recommendation
    next: 105,
  },
  {
    st_id: 103,
    stmt: 'Washing your ${response.reply} number of times per week when it is oily is not healthy',
    next: 106,
  },
  {
    st_id: 104,
    stmt: 'Washing your ${response.reply} number of times per week when it is dull is not healthy',
    next: 106,
  },
  {
    st_id: 105,
    stmt: 'I recommend you use dove oxygen moisture for even better results',
    next: 106
  },
  {
    st_id: 106,
    stmt: 'I recommend you use dove(oil control/daily shine based on the hair problem) shampoo',
    next: 'Show shampoo images',
  },
  ]

  // response object
  @observable response = {
    st_id: 0,
    stmt: '',
    reply: '',
  }

  // view display
  @observable contentArray = []
} 