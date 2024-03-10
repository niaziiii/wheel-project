import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InfoForm from "./components/InfoForm";
import Wheel from "./components/Wheel";
import { useAppContext, actionTypes } from "./context";
import ShowInfoModel from "./components/ShowInfoModel";
import WheelSpinner from "./components/Spinner2";

function App() {
  const { state, dispatch } = useAppContext();
  console.log({ mm: state.isModalOpen });
  const closeModal = () => {
    dispatch({ type: actionTypes.SET_MODEL, payload: false });
  };
  return (
    <div className="h-screen relative">
      {state.isModalOpen && <ShowInfoModel close={closeModal} />}
      <HeroSection />
      <InfoForm />
      <Wheel />
      <WheelSpinner />
      <Footer />
    </div>
  );
}

export default App;
