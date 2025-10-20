import { Button, PasswordInput, TextInput } from "@mantine/core";
import { IconHeartbeat } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { Link, useNavigate } from "react-router";
import { loginUser } from "../service/UserService";
import {
  errorNotification,
  successNotification,
} from "../utils/NotificationUtil";

const Login = () => {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (!value ? "Password is required" : null),
    },
  });
  const handleSubmit = (values: typeof form.values) => {
    loginUser(values)
      .then((_data) => {
        successNotification("Logged in successfully.");
        navigate("/");
      })
      .catch((err) => {
        errorNotification(err.response.data.errorMessage);
      });
  };
  return (
    <div
      style={{ background: "url(/bg.jpeg)" }}
      className="w-screen h-screen !bg-cover !bg-center !bg-no-repeat flex flex-col items-center justify-center"
    >
      <div className="text-pink-400 py-3 flex gap-1 items-center">
        <IconHeartbeat size={45} stroke={2.5} />
        <span className="font-merriweather text-4xl font-semibold">Pulse</span>
      </div>

      <div className="w-[450px] backdrop-blur-md p-10 py-8 rounded-lg">
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col gap-5 [&_input]:placeholder-neutral-100 [&_.mantine-Input-input]:!border-white focus-within:[&_.mantine-Input-input]:!border-pink-400 [&_.mantine-Input-input]:!border [&_input]:!pl-2  [&_svg]:!text-[var(--color-light)] [&_input]:!text-[var(--color-light)]"
        >
          <div className="self-center font-medium text-[var(--color-light)] text-2xl">
            Login
          </div>
          <TextInput
            className="transition duration-300"
            variant="unstyled"
            size="md"
            radius="md"
            placeholder="Email"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            className="transition duration-300"
            variant="unstyled"
            size="md"
            radius="md"
            placeholder="Password"
            {...form.getInputProps("password")}
          />
          <Button type="submit" color="pink" radius="md" size="md">
            Login
          </Button>
          <div className="text-neutral-100 text-sm self-center hover:underline">
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
