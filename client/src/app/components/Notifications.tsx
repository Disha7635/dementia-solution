'use client';
import NotificationAPI from 'notificationapi-js-client-sdk';
// import notificationapi from 'notificationapi-node-server-sdk';
import 'notificationapi-js-client-sdk/dist/styles.css';
import { PopupPosition } from 'notificationapi-js-client-sdk/lib/interfaces';
import { memo, useEffect } from 'react';
// require('dotenv').config();

type NotificationAPIComponentProps = {
  userId: string;
};

const NotificationAPIComponent = memo((props: NotificationAPIComponentProps) => {
  useEffect(() => {
    const notificationapi = new NotificationAPI({
      clientId: process.env.REACT_APP_API_KEY ?? '',
      userId: props.userId
    });
    notificationapi.showInApp({
      root: 'CONTAINER_DIV_ID',
      popupPosition: PopupPosition.BottomLeft
    });
  }, [props.userId]);

  return <div id="CONTAINER_DIV_ID"></div>;
});

NotificationAPIComponent.displayName = 'NotificationAPIComponent';

export default NotificationAPIComponent;

