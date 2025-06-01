import {CheckboxWrapper} from "./src/checkbox/CheckboxWrapper";
import { PageWindow } from "./src/pagination/PageWindow";


const AppLayout = () => {
  return (
    <div className="app">
        Hello from APP.js
        {/* <PageWindow /> */}
        <CheckboxWrapper/>
    </div>
  );
};

export default AppLayout;
