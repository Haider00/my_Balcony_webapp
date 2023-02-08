import dynamic from "next/dynamic";

const MobileView = dynamic(() => import("./MobileView/mobileView"), {
  ssr: false,
});

export default function ResetPass() {
  return <>{typeof window !== "undefined" && <MobileView />}</>;
}
