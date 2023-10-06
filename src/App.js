import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar.js';
import Create from './pages/Create/Create.js';
import Home from './pages/Home/Home.js';
import Recipe from './pages/Recipe/Recipe.js';
import Search from './pages/Search/Search.js';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';

function App() {
  // new
  const {mode} = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>

      <Navbar />
      <ThemeSelector/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/search' element={<Search />} />
        <Route path='/recipes/:id' element={<Recipe />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;