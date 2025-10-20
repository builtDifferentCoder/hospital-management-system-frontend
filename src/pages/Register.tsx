import {
  Button,
  PasswordInput,
  SegmentedControl,
  TextInput,
} from "@mantine/core";
import { IconHeartbeat } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { Link, useNavigate } from "react-router";
import { registerUser } from "../service/UserService";
import {
  errorNotification,
  successNotification,
} from "../utils/NotificationUtil";

const Register = () => {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      name: "john doe",
      type: "PATIENT",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      name: (value) => (!value ? "Name is required" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (!value ? "Password is required" : null),
      confirmPassword: (value, values) =>
        value === values.password ? null : "Password's don't match",
    },
  });
  const handleSubmit = (values: typeof form.values) => {
    registerUser(values)
      .then((_data) => {
        successNotification("Registered successfully.");
        navigate("/login");
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
            Register
          </div>
          <SegmentedControl
            fullWidth
            size="md"
            radius="md"
            color="pink"
            bg="none"
            className="[&_*]:!text-[var-(--color-white)] border border-white"
            data={[
              { label: "Patient", value: "PATIENT" },
              { label: "Doctor", value: "DOCTOR" },
              { label: "Admin", value: "ADMIN" },
            ]}
            {...form.getInputProps("type")}
          />
          <TextInput
            className="transition duration-300"
            variant="unstyled"
            size="md"
            radius="md"
            placeholder="john doe"
            {...form.getInputProps("name")}
          />
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
          <PasswordInput
            className="transition duration-300"
            variant="unstyled"
            size="md"
            radius="md"
            placeholder="Confrim Password"
            {...form.getInputProps("confirmPassword")}
          />
          <Button type="submit" color="pink" radius="md" size="md">
            Register
          </Button>
          <div className="text-neutral-100 text-sm self-center hover:underline">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
