import { Header } from '../componentes/Header';
import { Player } from '../componentes/Player';
import { Sidebar } from '../componentes/Sidebar';

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Player />
        <Sidebar />
      </main>
    </div>
  );
}
