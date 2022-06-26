import { useParams } from 'react-router-dom';

import { Header } from '../componentes/Header';
import { Player } from '../componentes/Player';
import { Sidebar } from '../componentes/Sidebar';

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Player lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
}
