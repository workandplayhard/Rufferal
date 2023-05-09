import { Route, Routes } from "react-router-dom";
import Home from "./HomePage";
import ConfirmDeposit from "./screens/ConfirmDeposit";
import Loading from "./screens/Loading";
import MyWallet from "./screens/MyWallet";
import NiceWork from "./screens/NiceWork";
import OpenSeaScreen from "./screens/OpenSeaScreen";
import RufferalCreated from "./screens/RufferalCreated";
import Transfer from "./screens/Transfer";
import SendERC20 from "./screens/SendERC20";
import GiveAway from "./screens/GiveAway";
import LandingPage from "./screens/LandingPage";
import ExampleGiveAway from "./screens/ExampleGiveAway";
import TaskWidget from "./screens/TaskWidget";
import SelectTocken from "./screens/SelectTocken";
import FirebaseContext from "./components/Db/firebaseContext";
import { database } from "./components/Db/firebase";

function App() {
  return (
    <FirebaseContext.Provider value={database}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirmdeposit" element={<ConfirmDeposit />} />
          <Route path="/Loading" element={<Loading />} />
          <Route path="/MyWallet" element={<MyWallet />} />
          <Route path="/NiceWork" element={<NiceWork />} />
          <Route path="/OpenSeaScreen" element={<OpenSeaScreen />} />
          <Route path="/RufferalCreated" element={<RufferalCreated />} />
          <Route path="/Transfer" element={<Transfer />} />
          <Route path="/SendERC20" element={<SendERC20 />} />
          <Route path="/GiveAway" element={<GiveAway />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/ExampleGiveAway" element={<ExampleGiveAway />} />
          <Route path="/TaskWidget" element={<TaskWidget />} />
          <Route path="/SelectTocken" element={<SelectTocken />} />
        </Routes>
      </>
    </FirebaseContext.Provider>
  );
}

export default App;
