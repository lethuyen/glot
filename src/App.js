import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from './Routes'
import { DefaultLayout} from './Components/Layout'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="app">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout || DefaultLayout;
              return (
                <Route key={index} 
                path={route.path}
                element={<Layout>
                            <Page/>
                          </Layout>}
                />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  )
}

export default App;