import s from './App.module.scss'
import { AppRoutes } from "./routes/AppRoutes";
import { Button } from "../components/button/button";

function App() {
  const linksArr = [
    {id: 1, category: 'test1', to: '/test'},
    {id: 2, category: 'test2', to: '/cards'}
  ]
  return (
    <>
      <div className={s.header}>
        <h1 className={s.title}>Тестовое задание ATT</h1>
        <div className={s.links}>
          {linksArr.map(cat => 
            <Button 
              key={cat.id} 
              to={cat.to} 
              children={cat.category}/>
          )}
        </div>
      </div>

      <AppRoutes/>
    </>
  );
}

export default App;