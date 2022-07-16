import { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";
import useNotificationList from "../hooks/useNotificationList";

export function NotificationItem({
  from_name,
  from_avatar,
  action,
  job_title,
  role,
  created_at,
}: any) {
  return (
    <li>
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          style={{ margin: 10, width: 40, height: 40 }}
          alt="img"
          src={from_avatar}
        />
        <div style={{ lineHeight: "25px", flexGrow: 1, color: "black" }}>
          <div style={{ fontSize: 16 }}></div>
          <p style={{ whiteSpace: "normal" }}>
            <span style={{ color: "#ff3366"}}>{from_name}</span> <strong>{action}</strong> your{" "}
            <strong>{job_title}</strong> {role==="candidate"?"application":"job"}
          </p>
        </div>
      </span>
    </li>
  );
}
export default function NotificationList() {
  const notifications = useNotificationList();
  const { user } = useSelector(selectLogin);

  const displayNotification = useCallback(() => {
    return (
      <ul className="list" style={{ width: 300 }}>
        {notifications.map((notification: any, i: number) => {
          return (
            <NotificationItem
              key={i}
              from_name={notification.from_name}
              from_avatar={notification.from_avatar}
              action={notification.action}
              job_title={notification.job_title}
              created_at={notification.created_at}
              role={user.role}
            />
          );
        })}
      </ul>
    );
  }, [notifications]);

  return <>{displayNotification()}</>;
}
