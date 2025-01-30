let hostName: any = window.location.hostname.includes("localhost")
  ? `http://${ window.location.hostname }`
  : `https://${ window.location.hostname }`;

export const environment = {
	production: true,
	hostName: hostName,

	localhost: `${hostName}/api`
};
