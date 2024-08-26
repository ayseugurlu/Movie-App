import "./App.css";
import AuthContext from "./context/AuthContext";
import MovieProvider from "./context/MovieProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="">
      
      <AuthContext>
        <MovieProvider>
          <AppRouter />
        </MovieProvider>
      </AuthContext>
        
      
    </div>
  );
}

export default App;
