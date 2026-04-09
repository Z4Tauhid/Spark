import Image from "next/image";
import TraineeShipProgram from "./Component/TraineeShipProgram";
import LeadirshipTraining from "./Component/LeadirshipTraining";


export default function Home() {
  return (
    <div className="bg-[#f7f6f5]" >
      <TraineeShipProgram></TraineeShipProgram>
      <LeadirshipTraining></LeadirshipTraining>
    </div>
  );
}