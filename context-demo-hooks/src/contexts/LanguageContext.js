import React, { createContext, Component } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);

    this.state = { language: 'french' };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(event) {
    this.setState({ language: event.target.value });
  }

  render() {
    return (
      <LanguageContext.Provider value={{ ...this.state, changeLanguage: this.changeLanguage }}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {value => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
)

/**
 * 컴포넌트 당 한 개의 contextType 을 가질 수 있다. 
 * 그 말은, 오직 하나의 Context API 를 사용하는 것이 맞다는 뜻이지만,
 * Navbar.js 의 경우에 ThemeContext & LanguageContext 를 모두 사용해야 한다.
 * 
 * Navbar.js 에서,
 * const contextType = ThemeContext; 
 * 로 주-Context API 를 정한다.
 * 사용해야 할 LanguageContext 는 Higher-Order Component 로 만들어서 Navbar.js 에 씌워준다.
 * 
 * 위의 withLanguageContext 가 Higher-Order Component 이다.
 */