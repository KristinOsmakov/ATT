import s from './BasePage.module.scss'
import { Button } from "../components/button/button";
import { AppRoutes } from '../app/routes/AppRoutes';
import { Container } from '../components/container/container';

function BasePage() {
  const linksArr = [
    {id: 1, category: 'test1', to: '/test'},
    {id: 2, category: 'test2', to: '/cards'}
  ]
  return (
    <>
      <Container className={s.header}>
        <h1 className={s.title}>Тестовое задание ATT</h1>
          <div className={s.links}>
            {linksArr.map(cat => 
              <Button 
                key={cat.id} 
                to={cat.to} 
                children={cat.category}/>
            )}
          </div>
      </Container>

      <AppRoutes/>
    </>
  );
}

export default BasePage;