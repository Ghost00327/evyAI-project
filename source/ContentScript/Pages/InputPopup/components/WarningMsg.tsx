import React from "react";
import { IAPI_WARNING } from "../../../types";
import { IconInfoCircle } from "@tabler/icons-react";
import { Alert } from "@mantine/core";

export default function WarningMsg({
  warning: {
    href: { label, url },
    message,
    title,
  },
}: {
  warning: IAPI_WARNING;
}) {
  return (
    <Alert variant="light" color="yellow" title={title || ""} icon={<IconInfoCircle />}>
      <span>{message}</span>{" "}
      <a href={url} target="_blank">
        {label}
      </a>
    </Alert>
  );
}
