import { Heading } from "@/components/heading";
import {
  Sidebar,
  SidebarBody,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/sidebar";
import {
  HomeIcon,
  Square2StackIcon,
  TvIcon,
  WindowIcon,
} from "@heroicons/react/16/solid";
import { useLocation } from "@tanstack/react-router";

const nav = [
  { text: "Display", url: "/settings/display", Icon: TvIcon },
  { text: "Theme", url: "/settings/theme", Icon: WindowIcon },
] as const;

export function SettingsSidebar() {
  const pathname = useLocation({ select: (location) => location.pathname });
  return (
    <Sidebar>
      <SidebarHeading>
        <Heading>Settings</Heading>
      </SidebarHeading>
      <SidebarBody>
        <SidebarSection>
          {nav.map(({ text, url, Icon }) => (
            <SidebarItem to={url} current={pathname === url}>
              <Icon />
              <SidebarLabel>{text}</SidebarLabel>
            </SidebarItem>
          ))}
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  );
}
