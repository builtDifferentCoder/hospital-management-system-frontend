import { Avatar, Text } from "@mantine/core";
import {
  IconCalendarCheck,
  IconHeartbeat,
  IconLayoutGrid,
  IconMoodHeart,
  IconStethoscope,
  IconVaccine,
} from "@tabler/icons-react";
import { NavLink } from "react-router";

const links = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: <IconLayoutGrid stroke={1.5} />,
  },
  {
    name: "Doctors",
    url: "/doctors",
    icon: <IconStethoscope stroke={1.5} />,
  },
  {
    name: "Patients",
    url: "/patients",
    icon: <IconMoodHeart stroke={1.5} />,
  },
  {
    name: "Appointments",
    url: "/appointments",
    icon: <IconCalendarCheck stroke={1.5} />,
  },
  {
    name: "Pharmacy",
    url: "/pharmacy",
    icon: <IconVaccine stroke={1.5} />,
  },
];
const Sidebar = () => {
  return (
    <div className="flex">
      <div className="w-64"></div>
      <div className="fixed bg-[var(--color-dark)] w-64 flex h-screen overflow-y-auto flex-col gap-8 items-center">
        <div className="text-primary-400 z-[500] bg-[var(--color-dark)] py-3 flex gap-1 items-center">
          <IconHeartbeat size={40} stroke={2.5} />
          <span className="font-merriweather text-3xl font-semibold">
            Pulse
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1 items-center">
            <div className="p-1 bg-white rounded-full shadow-xl">
              <Avatar
                variant="filled"
                src="avatar.jpeg"
                size="xl"
                alt="it's me"
              />
            </div>
            <span className="font-medium text-[var(--color-light)]">Ace</span>
            <Text c="dimmed" size="xl" className="text-[var(--color-light)]">
              Admin
            </Text>
          </div>
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                to={link.url}
                key={link.url}
                className={({ isActive }) =>
                  `flex items-center gap-3 w-full font-medium text-[var(--color-light)] px-4 py-5 rounded-lg ${
                    isActive
                      ? "bg-primary-400 text-[var(--color-dark)]"
                      : "hover:bg-gray-100 hover:text-[var(--color-dark)]"
                  }`
                }
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
