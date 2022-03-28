import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {useDispatch, useSelector} from 'react-redux';
import {USER, QUESTIONS} from '../Reducers/AuthReducer';
export const Login = data => {
  return {
    type: 'Login',
    load: data,
  };
};
// Find ID: {_id: ObjectId("61fb1542bb6a405f58979836")}
export const Question = (data, type) => {
  return {
    type: 'Question',
    questionType: type,
    load: data,
  };
};

export const Loading = key => {
  return {
    type: 'Loading',
    load: key,
  };
};

export const ActiveCards = key => {
  return {
    type: 'ActiveCards',
    load: key,
  };
};

export const UpdateQuestion = (data, type) => {
  return {
    type: 'UpdateQuestion',
    questionType: type,
    load: data,
  };
};

export const UpdateQuestionOfTheDay = data => {
  return {
    type: 'UpdateQuestionOfTheDay',
    load: data,
  };
};

export const Card = (data, type) => {
  return {
    type: 'Cards',
    cardType: type,
    load: data,
  };
};

export const FavCards = data => {
  return {
    type: 'FavCards',
    load: data,
  };
};

export const Vocabulary = (data, type) => {
  return {
    type: 'Vocabulary',
    vocabularyType: type,
    load: data,
  };
};

export const QuestionOfTheDay = data => {
  return {
    type: 'QuestionOfTheDay',
    load: data,
  };
};

export const SavedQuestions = data => {
  return {
    type: 'SavedQuestions',
    load: data,
  };
};

export const User = data => {
  return {
    type: 'User',
    load: data,
  };
};

export const WeeklyStatistics = data => {
  return {
    type: 'WeeklyStatistics',
    load: data,
  };
};

export const Quiz = data => {
  return {
    type: 'Quiz',
    load: data,
  };
};

export const CardSet = data => {
  return {
    type: 'CardSet',
    load: data,
  };
};

export const Render = data => {
  return {
    type: 'Render',
    load: data,
  };
};

export const FlashMessage = data => {
  showMessage(data);
};

export const FlipFunction = (data) => {
  return async (dispatch, state) => {
    try {
      dispatch(Render(data))
      } catch (err) {
    }
  };
};

export const LoginFunction = (newObj, navigation, destination,id) => {
  return async (dispatch, state) => {
    try {
      const token = await messaging().getToken();
      newObj.token = token;
    
      const response = await axios.post(
        `${state().AuthReducer.baseUrl}auth/login`,
        newObj,
      );

      dispatch(Login(response.data));
     
        const res = await axios.get(
          `${state().AuthReducer.baseUrl}user/statistics/${
           id
          }`,
        ).then(async(res)=>{
          await AsyncStorage.setItem('user', JSON.stringify(response.data));
          navigation.navigate(destination);
          dispatch(WeeklyStatistics(res.data));
        })
        
        
      } catch (err) {
      console.log(`Err in login function: `, err);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const GetRestQustions = () => {
  return async (dispatch, state) => {
    try {
      const quickQuestions = await axios.get(
        `${state().AuthReducer.baseUrl}question?limit=10&sortBy=createdAt:desc`,
      );
      dispatch(QuestionOfTheDay(quickQuestions.data.results));

      const savedQuestions = await axios.get(
        `${state().AuthReducer.baseUrl}question/savedquestions/${
          state().AuthReducer.login.user.id
        }`,
      );

      dispatch(SavedQuestions(savedQuestions.data));


    } catch (err) {
      console.log(`Err->`, err.response.data.message);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const SignupFunction = (newObj, navigation) => {
  return async (dispatch, state) => {
    try {
      console.log("newObj",newObj);
      const response = await axios.post(
        `${state().AuthReducer.baseUrl}user`,
        newObj,
      );
      FlashMessage({
        message: 'Successfully created your account',
        type: 'info',
      });
      dispatch(LoginFunction(newObj,navigation,"Home",response.data.id));
    } catch (err) {
      console.log(err.response.data.message);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const GetQuestionFunction = () => {
  return async (dispatch, state) => {
    try {
      {
        /**
     console.log(`Reponse ------->`);
      let subject = [];
      // console.log(response.data.results[0])

      response.data.results.forEach((e, i) => {
        if (!subject.includes(e.subject)) {
          subject = [...subject, e.subject];
          console.log(`result => `, e.subject);
        }
      });

      console.log(`--->`, subject);
     */
      }

      let response = await axios.get(
        `${state().AuthReducer.baseUrl}question?subject=English`,
      );
      // console.log(response.data, 'resposnse from que');
      dispatch(Question(response.data, 'English'));

      response = await axios.get(
        `${state().AuthReducer.baseUrl}question?subject=Reading`,
      );
      dispatch(Question(response.data, 'Reading'));

      response = await axios.get(
        `${state().AuthReducer.baseUrl}question?subject=Maths`,
      );
      dispatch(Question(response.data, 'Maths'));
      response = await axios.get(
        `${state().AuthReducer.baseUrl}question?subject=Science`,
      );
      dispatch(Question(response.data, 'Science'));

      response = await axios.get(
        `${state().AuthReducer.baseUrl}question?subject=Geometry`,
      );
      dispatch(Question(response.data, 'Geometry'));
    } catch (err) {
      console.log(`Errrr------->`, err.response.data.message);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const SendQuestionResponce = (responseObj, id, subject) => {
  return async (dispatch, state) => {
    try {
      const response = await axios.patch(
        `${state().AuthReducer.baseUrl}question/${id}`,
        responseObj,
      );
      var newSubject = '';
      switch (subject) {
        case 'English': {
          newSubject = 'english';
          break;
        }
        case 'Math': {
          return (newSubject = 'maths');
        }
        case 'Reading': {
          return (newSubject = 'reading');
        }
        case 'Science': {
          return (newSubject = 'science');
        }
        case 'Geometry': {
          return (newSubject = 'geometry');
        }
      }
      const restQuestions = state().AuthReducer.questions[
        `${newSubject}`
      ].results.filter(value => value.id !== id);

      const newObj = [...restQuestions, response.data];
    } catch (err) {
      console.log(`Errrr------->`, err.response.data.message);
      console.log(`responseObj------->`, responseObj);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const UpdateQuestionFunction = (responseObj, id) => {
  return async (dispatch, state) => {
    try {
      let response = await axios.patch(
        `${state().AuthReducer.baseUrl}question/${id}`,
        responseObj,
      );
      response = await axios.get(`${state().AuthReducer.baseUrl}quiz`);

      dispatch(Quiz(response.data.results));
    } catch (err) {
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const SendVisitorResponse = (responseObj, id, queNo) => {
  return async (dispatch, state) => {
    try {
      console.log('\x1b[31m', `SendVisitorResponse`);
      const response = await axios.patch(
        `${state().AuthReducer.baseUrl}question/${id}`,
        responseObj,
      );
      const newArr = [...state().AuthReducer.questionOfTheDay];
      newArr[parseInt(queNo)] = response.data;
      console.log(
        `response newArr[parseInt(queNo)] : `,
        newArr[parseInt(queNo)],
      );
      dispatch(UpdateQuestionOfTheDay(newArr));
    } catch (err) {
      console.log(`Errrr------->`, err.response.data.message);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const GetWeeklyStatistics = (responseObj, id) => {
  return async (dispatch, state) => {
    try {
      // console.log('\x1b[31m', `statistics`);

      const response = await axios.get(
        `${state().AuthReducer.baseUrl}user/statistics/${
          state().AuthReducer.login.user.id
        }`,
      );
      dispatch(WeeklyStatistics(response.data));
      // console.log('\x1b[31m', `statistics called`);
    } catch (err) {
      console.log(`Errrr------->`, err.response.data.message);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const UpdateCards = (req, id, key) => {
  return async (dispatch, state) => {
    try {
      console.log('\x1b[31m', `UpdateCards`);
      let response = await axios.patch(
        `${state().AuthReducer.baseUrl}card/${id}`,
        req,
      );
      const newObj = [...state().AuthReducer.activeCards];
      newObj[key] = response.data;

      // console.log('\x1b[31m',`UpdateCards newObj[key]`, newObj[key]);
      dispatch(ActiveCards(newObj));
    } catch (err) {
      console.log(`Errrr------->`, err.response.data.message);
    }
  };
};

export const GetFlashCards = obj => {
  return async (dispatch, state) => {
    try {
      const {id, subject, destination} = obj;
      // console.log('\x1b[31m', `Getting Flash Cards by ID: `, obj);

      let response = await axios.get(
        `${state().AuthReducer.baseUrl}${subject}?limit=1000&setId=${id}`,
      );

      dispatch(ActiveCards(response.data.results));
  
      obj.navigation.navigate(destination, {
        fav: false,
      });
    } catch (err) {
      console.log(`Errrr-----GetFlashCards------>`, err.response.data.message);
    }
  };
};
// delete GetCardsFunction
export const GetCardsFunction = () => {
  return async (dispatch, state) => {
    try {
      let response = await axios.get(
        `${state().AuthReducer.baseUrl}card?category=Card&premium=1&limit=1000`,
      );

      dispatch(Card(response.data, 'premium'));

      response = await axios.get(
        `${state().AuthReducer.baseUrl}card?category=Card&premium=0&limit=1000`,
      );
      dispatch(Card(response.data, 'free'));
    } catch (err) {
      console.log(`Errrr------->`, err.response.data.message);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const GetVocabularySetsFunction = () => {
  return async (dispatch, state) => {
    try {
      let response = await axios.get(
        `${
          state().AuthReducer.baseUrl
        }card?category=Vocabulary&premium=1&limit=1000`,
      );

      // console.log(`response.data for Vocab CARDS Premium ---- `, response.data);
      dispatch(Vocabulary(response.data, 'premium'));

      response = await axios.get(
        `${
          state().AuthReducer.baseUrl
        }card?category=Vocabulary&premium=0&limit=1000`,
      );

      dispatch(Vocabulary(response.data, 'free'));

      // console.log(`response.data for Vocab CARDS Free ---- `, response.data);
    } catch (err) {
      console.log(`Errrr------->`, err.response.data.message);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const GetSetsFunction = () => {
  // get All Sets for Vocab and cards
  return async (dispatch, state) => {
    try {
      // Cards
      let response = await axios.get(
        `${state().AuthReducer.baseUrl}set?subject=cards&limit=1000`,
      );
      console.log('response.data', response.data);
      dispatch(Card(response.data, 'premium'));

      // Vocabalory

      response = await axios.get(
        `${state().AuthReducer.baseUrl}set?subject=vocabulary&limit=100`,
      );
      dispatch(Vocabulary(response.data, 'premium'));
      // console.log(`reponse of vocabulary: `, response);
      // response = await axios.get(
      //   `${state().AuthReducer.baseUrl}set?subject=vocabolary&premium=0limit=1000`,
      // );
      // dispatch(Vocabulary(response.data, 'free'));
    } catch (err) {
      console.log(`Errrr------->`, err.response.data.message);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const GetAllQuizzes = () => {
  // get All Sets for Vocab and cards
  return async (dispatch, state) => {
    try {
      let response = await axios.get(`${state().AuthReducer.baseUrl}quiz`);
      dispatch(Quiz(response.data.results));
    } catch (err) {
      console.log(`Errrr------->`, err.response.data.message);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const UpdateUser = (req, id) => {
  return async (dispatch, state) => {
    try {
      let response = await axios.patch(
        `${state().AuthReducer.baseUrl}user/${id}`,
        req,
      );

      dispatch(User(response.data));
    } catch (err) {
      console.log(`Errrr------->`, err.response.data.message);
    }
  };
};

export const UpdateQuiz = (req, id) => {
  return async (dispatch, state) => {
    try {
      let response = await axios.patch(
        `${state().AuthReducer.baseUrl}quiz/${id}`,
        req,
      );
      console.log(response.data);
    } catch (err) {
      console.log(`Errrr------->`, err.response.data.message);
    }
  };
};

export const GetCardSets = subject => {
  // get All Sets for Vocab and cards
  return async (dispatch, state) => {
    try {
      // Cards
      let response = await axios.get(
        `${state().AuthReducer.baseUrl}set?subject=${subject}&limit=1000`,
      );
      console.log('response.data', response.data.results);
      dispatch(CardSet(response.data.results));
    } catch (err) {
      console.log(`Errrr------->`, err.response.data.message);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const GetFavCards = props => {
  return async (dispatch, state) => {
    try {
      let response = await axios.get(
        `${state().AuthReducer.baseUrl}card/getbyfavorite?id=${
          state().AuthReducer.login.user.id
        }&category=${props.type}`,
      );
      console.log('response.data.results', response.data);
      dispatch(FavCards(response.data));
      props.navigation.navigate(props.destination, {
        fav: true,
      });
    } catch (err) {
      console.log(`Errrr------->`, err.response.data.message);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};


export const PostToken = ()=>{
  return async (dispatch, state) =>{
    try{
      const token = await messaging().getToken();
      
      let response = await axios.post(
        `${state().AuthReducer.baseUrl}notification`,
        {
          token: token
        }       
      )
     
    }catch (err) {
      console.log(`Err in token: `, err);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }

  }
}

export const SetWeekestQuiz  = quiz=>{
  return (dispatch, state) =>{
  dispatch(Quiz(quiz)) 
  }
}

export const EraseAllData = (userId)=>{
  return async (dispatch, state) =>{
    try{
      
      let response = await axios.post(
        `${state().AuthReducer.baseUrl}user/reset`,
        {
          id : userId
        }       
      )
     console.log("response.data",response.data);
    }catch (err) {
      console.log(`Err in token: `, err);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }

  }
}