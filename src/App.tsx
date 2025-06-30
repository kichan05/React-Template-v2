import {MainPage} from "./page/MainPage";
import {Header} from "./component/organisms/Header";
import {Footer} from "./component/organisms/Footer";
import {Route, Routes} from "react-router-dom";

const RoutePath = {
    main: "/main",
    getDetails: (id: string | null) =>
        id ? `/details/${id}` : "/details/:id"
}


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
