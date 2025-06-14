import {CheckboxWrapper} from "./src/checkbox/CheckboxWrapper";
import { OtpBase } from "./src/otp/OtpBase";
import { PageWindow } from "./src/pagination/PageWindow";
import { ProgressBar } from "./src/progressBar/ProgressBar";


const AppLayout = () => {
  return (
    <div className="app">
        Hello from APP.js
        {/* <PageWindow /> */}
        {/* <CheckboxWrapper/> */}
        {/* <ProgressBar progress={75}/> */}
        <OtpBase />
    </div>
  );
};

export default AppLayout;
