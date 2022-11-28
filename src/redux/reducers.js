import * as types from "./actionType";

const initialState = {
  quizzes: [],
  questions: [],
  files: [],
  allData: {}
};

export const allDataReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_DATA: {
      console.log("action-----", action.payload);
      return {
        ...state,
        allData: action.payload

      }
    }
    default:
      return state
  }
  // console.log();
}
const jobsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_JOBS: {
      return {
        ...state,
        quizzes: action.payload,
      };
    }
    case types.POST_JOBS: {
      return {
        ...state,
        quizzes: action.payload
      }
    }
    default:
      return state;
  }
};
export const questionsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_QUESTIONS: {
      return {
        ...state,
        questions: action.payload,
      };
    }
    default:
      return state;
  }
};
export const postQuestionReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_QUESTIONS: {
      return {
        ...state,
        questions: action.payload
      }
    }
    default:
      return state
  }
}
export const putQuestionsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.PUT_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      }
    default:
      return state
  }
}

export const fileReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_FILE: {
      return {
        ...state,
        files: action.payload
      }
    }
  }
}
export default jobsReducers;
