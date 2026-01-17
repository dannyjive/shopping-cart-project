import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { Home } from "./pages/Home.js";
// import { Store } from "./pages/Store.js";
// import { About } from "./pages/About.js";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.js";

// Create your branch: "git checkout -b your-branch-name"
// Add your changes to git-local: "git add ."
// Commit your changes to git-local: "git commit -m 'add message here' "
// Update your branch: "git push -u origin your-branch-name"
// Pull latest repo before working on new stuff: 'git pull origin main'

// Add these dependencies: Formik, Yup, Sass

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
 {/* I removed the routing for now because it's only a single page app. But we can bring it back if we want to add more pages. */}
        {/* <Container fluid style={{ padding: 0 }}> */}
          <Home />
          {/* <Container className='mb-4'> */}
          {/* <Routes>
          <Route path='/' element={<Home />} /> */}
          {/* <Route path='/store' element={<Store />} /> */}
          {/* <Route path='/about' element={<About />} /> */}
          {/* </Routes> */}

          {/* </Container> */}
        {/* </Container> */}
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
