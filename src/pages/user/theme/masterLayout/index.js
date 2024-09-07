import { memo } from "react";
import Headers from "../header";
import Footer from "../footer";
import Lienlac from "../../lienLac/lienlac";





const MasterLayout = ({children, ...props}) => {
    return (<div {...props}>
       
    <Headers/>
    {children}
    <Lienlac/>
    <Footer/>
    </div>
    );
};

export default memo(MasterLayout);