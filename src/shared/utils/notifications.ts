type NotificationOptions = {
	title: string;
	body: string;
};

const showNotification = ({ title, body }: NotificationOptions) => {
	new Notification(title, { body });
};

export const sendNotification = (options: NotificationOptions) => {
	if (Notification.permission === "default") {
		Notification.requestPermission().then((permission) => {
			if (permission === "granted") {
				showNotification(options);
			}
		});
	} else if (Notification.permission === "granted") {
		showNotification(options);
	}
};
