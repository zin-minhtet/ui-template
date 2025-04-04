import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center">
      <div className="flex flex-col items-center gap-5 w-full">
        <div className="text-9xl text-center w-full font-black text-red-300">
          404
        </div>
        <span>Oops! The page you are looking for doesn't exist.</span>
        <Button
          variant="outline"
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
}
