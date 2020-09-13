import { useState } from "react";
import Top from "../organisms/Profile/Top";
import Tab from "../organisms/Profile/Tab";

function ProfileBody() {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Top></Top>
      <Tab selected={selected} setSelected={setSelected}></Tab>
    </>
  );
}

export default React.memo(ProfileBody);
