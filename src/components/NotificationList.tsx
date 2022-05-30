import { useCallback } from "react";
import useNotificationList from "../hooks/useNotificationList";


export function NotificationItem({from, created_at}:any){
    return(
    <li>
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img style={{ margin: 10, width: 40, height: 40 }} alt="img" />
        <div
          className="luca_profile_wrapper"
          style={{ lineHeight: "25px", flexGrow: 1 }}
        >
          <div style={{ fontSize: 16 }}></div>
          <div>{from}</div>
        </div>
      </span>
    </li>);
}
export default function NotificationList() {
    const notifications = useNotificationList();

    const displayNotification = useCallback(() => {
      return (
        <ul className="list" style={{ width: 300 }}>
          {notifications.map((notification: any, i: number) => {
            return (
              <NotificationItem
                key={i}
                from={notification.from}
                created_at={notification.created_at}
              />
            );
          })}
          </ul>
      );
    }, [notifications]);

    return (
        <>
            {displayNotification()}
        </>
    )
}

