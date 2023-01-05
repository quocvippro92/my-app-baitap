import { useParams } from "react-router-dom";

function PageD() {
    const {id} = useParams();
    
    return <div>
        <h1>Page D: {id}</h1>
    </div>;
}

export default PageD;