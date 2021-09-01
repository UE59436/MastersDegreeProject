import Documentation from "./components/Documentation/Documentation";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import ProductImageCarousel from "./components/ProductImageCarousel/ProductImageCarousel";
import ProductNavigation from "./components/ProductNavigation/ProductNavigation";
import ProductParameters from "./components/ProductParameters/ProductParameters";
import { GlobalStyle } from "./helpers/GlobalStyle.style";
import { SectionTitle } from "./helpers/HelperStyles.style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />

      <ProductNavigation />
      <ProductImageCarousel />

      <SectionTitle id="description">
        Opis Produktu
      </SectionTitle>
      <ProductDescription />

      <SectionTitle id="parameters">
        Specyfikacja
      </SectionTitle>
      <ProductParameters />

      <SectionTitle id="documentation">
        Pobierz dokumenty
      </SectionTitle>
      <Documentation />
      <Footer />
    </div>
  );
}

export default App;
