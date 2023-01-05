import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./page/home/home";
import PageD from "./page/page-d/PageD";

export function ReactRouterDemoApp() {
  const navigate = useNavigate();
  // useNavigate :(điều hướng) tạo 1 hàm điều hướng qua trang khác
//   const localtion = useLocation();
//   console.log(localtion);

  return (
    <div className="router-demo">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            index
            path="page-a"
            element={
              <div>
                <h1>Page Default </h1>
                <button
                  onClick={() => {
                    navigate("page-d/12345");
                  }}
                >
                  Go to Page D with Params
                </button>
              </div>
            }
          />
          <Route
            path="page-b"
            element={
              <div>
                <h1>Page B</h1>
              </div>
            }
          />
          <Route
            path="page-c"
            element={
              <div>
                <h1>Page C</h1>
              </div>
            }
          />
          <Route path="page-d/:id" element={<PageD />} />
          <Route
            path="*"
            element={
              <div>
                <h1>Page loi</h1>
              </div>
            }
          />
        </Route>

        {/* <Route path="/page-a" element = {<PageA/>}/>
            <Route path="/page-b" element = {<PageB/>}/>
            <Route path="/page-c" element = {<PageC/>}/> */}
      </Routes>
    </div>
  );
}
