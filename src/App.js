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

      <SectionTitle>
        Opis Produktu
      </SectionTitle>
      <ProductDescription />

      <SectionTitle>
        Specyfikacja
      </SectionTitle>
      <ProductParameters />

      <SectionTitle>
        Pobierz dokumenty
      </SectionTitle>
      <Documentation />
      <Footer />
    </div>
  );
}

export default App;
