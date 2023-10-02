import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  // // 기본 카테고리 state 선언
  // const [category, setCategory] = useState('all');
  // // 콜백으로 사용할 카테고리 함수
  // const onSelect = useCallback((Category) => setCategory(Category), []);

  return <Route path="/:category?" component={NewsPage} />;
}

export default App;
