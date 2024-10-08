import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/Login'
import QuizGame from './components/QuizGame';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/quiz-game" element={<QuizGame />}/>
        <Route path="/result" element={<ResultPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
