import { Notification } from "@mantine/core";
import React from "react";
import { useNotifications } from "../../../hooks/useNotifications";
import { useStyles } from "./NotificationWrapper.style";

export default function NotificationWrapper() {
  const { notifications, clearNotification } = useNotifications();
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      {notifications.map((n) => (
        <Notification onClose={() => clearNotification(n.id)} key={n.id} title={n.title} color={n.color} />
      ))}
    </div>
  );
}
