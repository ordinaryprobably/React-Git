import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

/**
 * Provider 는 value 를 사용하고 싶은 컴포넌트만 감싸면 된다.
 * <ThemeProvider> 와 <LanguageProvider> 의 위치가 다른 이유다.
 */

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <LanguageProvider>  
          <Navbar />
          <Form />
        </LanguageProvider>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
