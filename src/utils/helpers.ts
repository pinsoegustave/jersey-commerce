import { toast } from "sonner"


export const makeToast = (text: string) => {
    toast.success(text, {
        style: {
            borderRadius: "4px",
            background: "#333",
            color: "#fff",
        },
    });
};