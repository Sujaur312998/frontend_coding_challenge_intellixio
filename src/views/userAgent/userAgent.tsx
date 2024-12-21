import { BackToHome } from "@/components/backToHome/backToHome";
import { headers } from "next/headers";

export const UserAgent = () => {
  const headersList = headers();
  const agentData: string = headersList.get("userAgentData") || "";

  const userAgent = JSON.parse(agentData);

  return (
    <div>
      <BackToHome />
      <div className="flex font-mono font-semibold text-sm">
        <div className="border p-2">UserAgent</div>
        <div className="border p-2">{userAgent} </div>
      </div>
    </div>
  );
};
