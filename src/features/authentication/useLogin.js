import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading: isLogging } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    // eslint-disable-next-line no-unused-vars
    onSuccess: (user) => {
      console.log(user);
      //Manually set data into the cache
      queryClient.setQueryData(["user"], user.user);
      //Going back should not be allowed with replace:true
      navigate("/dashboard", { replace: true });
    },
    // eslint-disable-next-line no-unused-vars
    onError: (error) => {
      toast.error("Provided email or password are incorrect");
    },
  });
  return { login, isLogging };
}
