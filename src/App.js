import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ArtistProfile from "./pages/ArtistProfile";
import NotFound from "./pages/NotFound";

function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home/>} />
        <Route path="artist">
          <Route path="GAMABA">
            <Route path=":id" element={<ArtistProfile />} />
          </Route>
          <Route path="NationalArtist">
            <Route path=":id" element={<ArtistProfile />}></Route>
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
