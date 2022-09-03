import stylesjs from './stylesjs';

import Button from './components/Button';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

const App = () => (
  <div className="bg-primary w-full overflow-hidden ">
    <div className={`${stylesjs.paddingX}`}>
      <div className={`${stylesjs.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${stylesjs.flexStart}`}>
      <div className={`${stylesjs.boxWidth}`}>
        <Main/>
      </div>
    </div>

    <div className={`bg-primary ${stylesjs.paddingX} ${stylesjs.flexStart}`}>
      <div className={`${stylesjs.boxWidth}`}>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>

  </div>
);

export default App