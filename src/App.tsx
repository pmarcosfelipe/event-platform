import { gql, useQuery } from '@apollo/client';
import { Header } from './componentes/Header';
import { Event } from './pages/Event';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return <Event />;
}

export default App;
