import { notifications } from "@mantine/notifications";
import { IconCheck, IconCross } from "@tabler/icons-react";

const successNotification = (message: string) => {
  notifications.show({
    title: "Success",
    message: message,
    color: "pink",
    icon: <IconCheck />,
    withCloseButton: true,
    withBorder: true,
    className: "!border-purple-400",
  });
};

const errorNotification = (message: string) => {
  notifications.show({
    title: "Error",
    message: message,
    color: "red",
    icon: <IconCross />,
    withCloseButton: true,
    withBorder: true,
    className: "!border-purple-400",
  });
};
export { successNotification, errorNotification };
