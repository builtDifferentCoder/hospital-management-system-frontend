import { ActionIcon, Button } from "@mantine/core";
import {
  IconBellRinging,
  IconLayoutSidebarLeftCollapseFilled,
} from "@tabler/icons-react";
import ProfileMenu from "./ProfileMenu";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeJwt } from "../slices/JwtSlice";
const Header = () => {
  const dispatch = useDispatch();
  const jwt = useSelector((state: any) => state.jwt);
  const handleLogout = () => {
    dispatch(removeJwt());
  };
  return (
    <div className="bg-[var(--color-light)] shadow-lg w-full h-16 flex justify-between px-5 items-center">
      <ActionIcon variant="transparent" size="md" aria-label="Settings">
        <IconLayoutSidebarLeftCollapseFilled
          style={{ width: "90%", height: "90%" }}
          stroke={1.5}
        />
      </ActionIcon>
      <div className="flex gap-5 items-center">
        {jwt ? (
          <Button color="red" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Link to="login">
            <Button>Login</Button>
          </Link>
        )}
        {jwt && (
          <>
            <ActionIcon variant="transparent" size="md" aria-label="Settings">
              <IconBellRinging
                style={{ width: "90%", height: "90%" }}
                stroke={2}
              />
            </ActionIcon>
            <ProfileMenu />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
