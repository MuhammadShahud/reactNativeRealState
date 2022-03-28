const initialState = {
  baseUrl: 'https://realestateadvantage.herokuapp.com/api/',
  // baseUrl: 'http://192.168.18.193:3005/api/',
  flipCard: false,
  loading: false,
  login: {
    // user: {
    //   id: '052',
    // },
  },
  questions: [],
  cards: {},
  activeCards: [],
  vocabulary: {},
  questionOfTheDay:[],
  savedQuestions:[],
  weeklyStatistics:{ "answer": {
    "totalAnswers": 6,
    "attemptAnswer": 0,
    "setPercentage": [
        {
            "percentage": 0
        },
        {
            "percentage": 0
        }
    ]
},
"testComplete": {
    "totalTests": 10,
    "correct": 6
},
"weekestQuiz": {
    "premium": true,
    "questions": [
        {
            "favorites": [],
            "visitors": [],
            "options": [
                "shahud",
                "asiodj",
                "sdij",
                "sdij"
            ],
            "attempt": [],
            "passed": [],
            "question": "asiojdkiasjdiojsaiodjasiodjioas",
            "explanation": "dijsoajdioasjdiojasiodjasiojdioasjdioasjio",
            "category": 1,
            "answer": "shahud",
            "premium": false,
            "createdAt": "2022-03-03T23:23:53.527Z",
            "updatedAt": "2022-03-15T00:16:57.445Z",
            "id": "62214e09241fe50021dcc740"
        },
        {
            "favorites": [],
            "visitors": [],
            "options": [
                "isjd",
                "shahud",
                "odsk",
                "sdok"
            ],
            "attempt": [],
            "passed": [],
            "question": "sdijfsdiojfosdifjsdoifjsdiofj",
            "explanation": "opsajdposajdpoasjdpoas",
            "category": 1,
            "answer": "shahud",
            "premium": false,
            "createdAt": "2022-03-03T23:24:38.674Z",
            "updatedAt": "2022-03-15T00:17:46.537Z",
            "id": "62214e36241fe50021dcc741"
        },
        {
            "favorites": [],
            "visitors": [],
            "options": [
                "sdji",
                "jisd",
                "shahud",
                "oijd"
            ],
            "attempt": [],
            "passed": [],
            "question": "jsdioasjiodjasiodjasiodjasiodjioas",
            "explanation": "oijdsioajdioasjiodasjiodjqwojdasxjklzjdioasdqwd",
            "category": 1,
            "answer": "shahud",
            "premium": false,
            "createdAt": "2022-03-03T23:24:54.323Z",
            "updatedAt": "2022-03-15T00:16:57.445Z",
            "id": "62214e46241fe50021dcc742"
        },
        {
            "favorites": [],
            "visitors": [],
            "options": [
                "iasodj",
                "sdij",
                "asdji",
                "shahud"
            ],
            "attempt": [],
            "passed": [],
            "question": "aiosdjasiodjiosjdaodjioasjdaiosdjasio",
            "explanation": "poaspodkqwopkdpoaskpodkxpozckpokwpodqwdqwdszxzczc",
            "category": 1,
            "answer": "shahud",
            "premium": false,
            "createdAt": "2022-03-03T23:25:18.899Z",
            "updatedAt": "2022-03-15T00:16:57.445Z",
            "id": "62214e5e241fe50021dcc743"
        },
        {
            "favorites": [],
            "visitors": [],
            "options": [
                "shahud",
                "iojds",
                "sdoji",
                "dsijo"
            ],
            "attempt": [],
            "passed": [],
            "question": "askdposkapokdpoaskdiojasiodjiosjdioasjiojijxiosjdiojas",
            "explanation": "iojsdjqwiojdposkxzklxnjksnqwiodjuiosjioxjoijiowjswed",
            "category": 1,
            "answer": "shahud",
            "premium": false,
            "createdAt": "2022-03-03T23:25:35.637Z",
            "updatedAt": "2022-03-15T00:16:57.445Z",
            "id": "62214e6f241fe50021dcc744"
        }
    ],
    "attempt": [
        "61f9b29889547c3cfc0e6fc9"
    ],
    "author": "Shahudmalik5@gmail.com",
    "title": "shahud",
    "desc": "aiosdjasi",
    "createdAt": "2022-03-03T23:22:50.020Z",
    "updatedAt": "2022-03-09T23:59:12.799Z",
    "id": "62214dca241fe50021dcc73f"
},
"practiceScore": {
    "allQuestions": 0,
    "setPercentage": [
        {
            "percentage": 0
        },
        {
            "percentage": 0
        }
    ]
},
"flashCardScore": {
    "allFlashCard": 0,
    "setsPercentage": [
        {
            "percentage": 0
        },
        {
            "percentage": 0
        },
        {
            "percentage": 0
        }
    ]
},
"vocabularyScore": {
    "allVocabulary": 0,
    "setsPercentage": [
        {
            "percentage": 0
        },
        {
            "percentage": 0
        },
        {
            "percentage": 0
        }
    ]
},
"weeklyActivities": {
    "answeredToday": 6,
    "answeredWeekly": 6,
    "studyTime": 30
}
},
  quizzes:[],
  cardSet:[],
  favCards:[],

};
// ?category=Vocabulary&premiun=false
// API Selector   useSelector
export const LOADING = state => state.AuthReducer.loading;
export const BASE_URL = state => state.AuthReducer.baseUrl;
export const QUESTIONS = state => state.AuthReducer.questions;
export const CARDS = state => state.AuthReducer.cards;
export const ACTIVECARDS = state => state.AuthReducer.activeCards;
export const VOCABULARY = state => state.AuthReducer.vocabulary;
export const USER = state => state.AuthReducer.login.user;
export const QUESTIONOFTHEDAY = state => state.AuthReducer.questionOfTheDay;
export const SAVEDQUESTIONS = state => state.AuthReducer.savedQuestions;
export const WEEKLYSTATISTICS = state => state.AuthReducer.weeklyStatistics;
export const QUIZZES = state => state.AuthReducer.quizzes;
export const CardSets = state => state.AuthReducer.cardSet;
export const FavCards = state => state.AuthReducer.favCards;
export const FLIPCARD = state => state.AuthReducer.flipCard;




export default function AuthReducer(state = initialState, action) {
  
  switch (action.type) {
    case 'Loading':
      return {
        ...state,
        loading: action.load,
      };

    case 'Login':
      return {
        ...state,
        login: action.load,
      };

    case 'Render':
      return {
        ...state,
        flipCard: action.load,
      };

      case 'User':
        
      return {
        ...state,
        login:{
          ...state.login,
          user:action.load
        }
      };

    case 'WeeklyStatistics':
      return {
        ...state,
        weeklyStatistics: action.load,
      };

    case 'Quiz':
      return {
        ...state,
        quizzes: action.load,
      };

      case 'FavCards':
        return {
          ...state,
          favCards: action.load,
        };

      case 'CardSet':
      return {
        ...state,
        cardSet: action.load,
      };


    case 'UpdateQuestionOfTheDay':
      return {
        ...state,
        questionOfTheDay: action.load,
      };

    case 'SavedQuestions':
      return {
        ...state,
        savedQuestions: action.load,
      };

    case 'ActiveCards':
      return {
        ...state,
        activeCards: action.load,
      };

    case 'QuestionOfTheDay':
      return {
        ...state,
        questionOfTheDay: action.load,
      };

    case 'Question':
      // console.log(action.questionType,"Goood....",action.load);
      switch (action.questionType) {
        case 'English':
          return {
            ...state,
            questions: {
              ...state.questions,
              english: action.load,
            },
          };
        case 'Maths':
          return {
            ...state,
            questions: {
              ...state.questions,
              maths: action.load,
            },
          };
        case 'Reading':
          return {
            ...state,
            questions: {
              ...state.questions,
              reading: action.load,
            },
          };

        case 'Science':
          return {
            ...state,
            questions: {
              ...state.questions,
              science: action.load,
            },
          };
        case 'Geometry':
          return {
            ...state,
            questions: {
              ...state.questions,
              geometry: action.load,
            },
          };
      }
    case 'UpdateQuestion':
      switch (action.questionType) {
        case 'English':
          return {
            ...state,
            questions: {
              ...state.questions,
              english: {
                results: [...action.load],
              },
            },
          };

        case 'Maths':
          return {
            ...state,
            questions: {
              ...state.questions,
              maths: {
                results: [...action.load],
              },
            },
          };

        case 'Reading':
          return {
            ...state,
            questions: {
              ...state.questions,
              reading: {
                results: [...action.load],
              },
            },
          };

        case 'Science':
          return {
            ...state,
            questions: {
              ...state.questions,
              science: {
                results: [...action.load],
              },
            },
          };

        case 'Geometry':
          return {
            ...state,
            questions: {
              ...state.questions,
              geometry: {
                results: [...action.load],
              },
            },
          };
      }

    case 'Cards':
      switch (action.cardType) {
        case 'premium':
          return {
            ...state,
            cards: {
              ...state.cards,
              premiumCard: action.load,
            },
          };
        case 'free':
          return {
            ...state,
            cards: {
              ...state.cards,
              freeCard: action.load,
            },
          }; case 'all':
          return {
            ...state,
            cards: {
              ...state.cards,
              allcard: action.load,
            },
          };
        
      }

    case 'Vocabulary':
      switch (action.vocabularyType) {
        case 'premium':
          return {
            ...state,
            vocabulary: {
              ...state.vocabulary,
              premiumVocabulary: action.load,
            },
          };
        case 'free':
          return {
            ...state,
            vocabulary: {
              ...state.vocabulary,
              freeVocabulary: action.load,
            },
          };
      }
  }

  return state;
}
