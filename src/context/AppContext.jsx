import React, { createContext, useContext, useReducer } from 'react';

// App state shape
// {
//   user: {
//     id: string,
//     name: string,
//     email: string,
//     phone: string,
//     photo?: string
//   } | null,
//   isAuthenticated: boolean,
//   savedColleges: Array<{
//     id: string,
//     name: string,
//     location: string,
//     type: string,
//     rating: number,
//     image: string,
//     fees: string,
//     cutoff?: number[]
//   }>,
//   connectedCounselors: Array<{
//     id: string,
//     name: string,
//     specialization: string,
//     rating: number,
//     availability: string,
//     photo: string
//   }>,
//   quizProgress: {
//     currentQuestion: number,
//     answers: Object<number, string>,
//     totalQuestions: number
//   },
//   chatMessages: Array<{
//     id: string,
//     text: string,
//     sender: 'user' | 'ai',
//     timestamp: Date
//   }>
// }

const initialState = {
  user: null,
  isAuthenticated: false,
  savedColleges: [],
  savedScholarships: [],
  connectedCounselors: [],
  quizProgress: {
    currentQuestion: 0,
    answers: {},
    totalQuestions: 10
  },
  chatMessages: []
};

function appReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };
    case 'SAVE_COLLEGE':
      return {
        ...state,
        savedColleges: [...state.savedColleges, action.payload]
      };
    case 'REMOVE_SAVED_COLLEGE':
      return {
        ...state,
        savedColleges: state.savedColleges.filter(college => college.id !== action.payload)
      };
    case 'SAVE_SCHOLARSHIP':
      return {
        ...state,
        savedScholarships: [...state.savedScholarships, action.payload]
      };
    case 'REMOVE_SAVED_SCHOLARSHIP':
      return {
        ...state,
        savedScholarships: state.savedScholarships.filter(scholarship => scholarship.id !== action.payload)
      };
    case 'CONNECT_COUNSELOR':
      return {
        ...state,
        connectedCounselors: [...state.connectedCounselors, action.payload]
      };
    case 'UPDATE_QUIZ_PROGRESS':
      return {
        ...state,
        quizProgress: { ...state.quizProgress, ...action.payload }
      };
    case 'ADD_CHAT_MESSAGE':
      const newMessage = {
        id: Date.now().toString(),
        text: action.payload.text,
        sender: action.payload.sender,
        timestamp: new Date()
      };
      return {
        ...state,
        chatMessages: [...state.chatMessages, newMessage]
      };
    case 'RESET_QUIZ':
      return {
        ...state,
        quizProgress: {
          currentQuestion: 0,
          answers: {},
          totalQuestions: 10
        }
      };
    default:
      return state;
  }
}

const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export default AppContext;