import ToDoApp from './components/ToDoApp';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <ToDoApp />
      <img src='./Assets/icons/delete.svg' alt='' />
      <Footer />
    </div>
  );
}

export default App;
