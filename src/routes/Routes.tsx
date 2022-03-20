import { Layout, Loading } from 'components';
import { NotFound } from 'components/errors';
import PokemonsHome from 'features/pokemonsHome/Index';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const DetailsPokemon = React.lazy(() => import('../features/pokemonDetails/Index'));

function MainRoutes() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonsHome />} />
          <Route
            path="/pokemon/:name"
            element={
              <Lazy>
                <DetailsPokemon />
              </Lazy>
            }
          />
          <Route path="*" element={() => <NotFound />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
export default MainRoutes;

export const Lazy = ({ children }: React.PropsWithChildren<{ children: React.ReactNode }>) => {
  return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};
