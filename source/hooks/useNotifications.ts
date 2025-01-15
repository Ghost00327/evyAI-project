import { create } from "zustand";
import { nanoid } from "nanoid";
import { MantineColor } from "@mantine/styles";

interface INotification {
  title: string;
  color?: MantineColor;
  id: string;
}

interface IUseNotifications {
  notifications: INotification[];
  // setNotifications: (v: INotification) => void;
  notify: (newNotification: Omit<INotification, "id">) => void;
  clearNotification: (id: string) => void;
}

export const useNotifications = create<IUseNotifications>()((set, get) => ({
  notifications: [],
  notify(newNotification) {
    const id = nanoid();
    setTimeout(() => {
      get().clearNotification(id);
    }, 5000);

    set(({ notifications }) => {
      return {
        notifications: [...notifications, { ...newNotification, id }],
      };
    });
  },
  clearNotification: (id) => {
    set(({ notifications }) => {
      return {
        notifications: notifications.filter((n) => n.id !== id),
      };
    });
  },
}));
