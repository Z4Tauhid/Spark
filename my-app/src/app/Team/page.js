
import JoinTeamCTA from "./Componnet/JoinTeamCTA";
import Team from "./Componnet/Team";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 bg-[#f7f6f5]" >
      <Team></Team>
      <JoinTeamCTA></JoinTeamCTA>
    </div>
  );
}
