
import './App.css'
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";
 function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <UploadForm />
        <ImageGallery />
      </div>
      <Footer />
    </div>
  );
}
export default App
