import {MainPage} from "./common/page/MainPage";
import {Header} from "./common/component/organisms/Header";
import {Footer} from "./common/component/organisms/Footer";
import {Route, Routes} from "react-router-dom";
import {RoutePath} from "./RoutePath";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path={RoutePath.main} element={<MainPage/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
