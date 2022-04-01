import { Routes, Route } from 'react-router-dom'

const routes = [
  { path: '/', Element: () => <></> },
  { path: '*', Element: () => <></> },
]

export default () => (
  <Routes>
    {routes.map(({ path, Element }) => (
      <Route key={path} path={path} element={<Element />} />
    ))}
  </Routes>
)
