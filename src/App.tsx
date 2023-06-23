import Router from './routes'
import { GlobalStyles } from './styles/global'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <>
    <GlobalStyles />
    <ToastContainer toastClassName={"toast_container"} />
    <Router />
  </>
);

export default App;
