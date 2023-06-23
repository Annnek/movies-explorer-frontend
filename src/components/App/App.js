import { Navigate, Route, Routes } from "react-router-dom";

import Main from "../Main/Main";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import Error404 from "../Error404/Error404";

function App() {
  return (
    <div className="page">
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/404" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
