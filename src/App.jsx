import PokeRoutes from './router/routes';
import Header from './components/Header';


export default function App() {
  return (
    <>
      <Header/>
      <main className='w-screen flex justify-center items-center flex-col text-brown-dark dark:text-neutral-200'>
        <PokeRoutes />

      </main>
    </>
  );
}

