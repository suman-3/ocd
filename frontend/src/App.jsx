import { HomePage, AboutPage} from './pages'
import Toolbar from './pages/Toolbar'
import { Layout } from './components/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogList from './pages/Bloglist'
import BlogDetail from './pages/BlogsDetail'
import Blogs from './pages/Blogs'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
           <Route path="/toolbar/:id" element={<Toolbar />} /> {/* 🔹 New route */}
           {/* <Route path="/blogs" element={<Blogs />} /> */}
            <Route path="/preview-blogs" element={<Blogs />} /> 

           <Route path="/blogs" element={<BlogList />} /> 
            <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

