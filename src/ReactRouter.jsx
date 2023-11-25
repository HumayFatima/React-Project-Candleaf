import React from "react";

import { Route, Routes } from "react-router"; import { WebRouter } from "./WebRouter";

const ReactRouter = () => {

return (

<Routes>
{WebRouter.map(({ id, path, element }) => { 
    
return <Route path={path} element={element} key={id} />;

})}

</Routes> 

);
};

export default ReactRouter;