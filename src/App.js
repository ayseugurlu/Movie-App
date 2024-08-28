import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthContext from "./context/AuthContext";
import MovieProvider from "./context/MovieProvider";
import AppRouter from "./router/AppRouter";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="">
      
      <AuthContext>
        <MovieProvider>
          <AppRouter />
          <ToastContainer/>
        </MovieProvider>
      </AuthContext>
        
      
    </div>
  );
}

export default App;
