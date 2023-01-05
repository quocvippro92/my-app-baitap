import { LayoutReactRouter } from "../../layout/LayoutReactRouter";

function PageA (){
    return <div className="page-a">
        <LayoutReactRouter content = {
            <div>
                <h1>Page-A</h1>
            </div> 
        } />
    </div>
}
export default PageA;