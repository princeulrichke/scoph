import { Loader } from "@/components";

export default function Loading() {
  return (
    <>
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-[#0a0a0a] z-50">
            <Loader />
        </div>
    </>
  );
}
