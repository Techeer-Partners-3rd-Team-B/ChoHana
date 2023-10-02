import React, { useCallback, useState } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

function App() {
  // 기본 카테고리 state 선언
  const [category, setCategory] = useState('all');
  // 콜백으로 사용할 카테고리 함수
  const onSelect = useCallback((Category) => setCategory(Category), []);

  return (
    <>
      {/* props로 카테고리 state와 함수를 넘겨준다 */}
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;
