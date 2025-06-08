import {CheckboxWrapper} from "./src/checkbox/CheckboxWrapper";
import { PageWindow } from "./src/pagination/PageWindow";
import { ProgressBar } from "./src/progressBar/ProgressBar";


const AppLayout = () => {
  return (
    <div className="app">
        Hello from APP.js
        {/* <PageWindow /> */}
        {/* <CheckboxWrapper/> */}
        <ProgressBar progress={75}/>
    </div>
  );
};

export default AppLayout;
