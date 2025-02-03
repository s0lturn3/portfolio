let hostName: any = window.location.hostname.includes("localhost")
  ? `http://${ window.location.hostname }`
  : `https://${ window.location.hostname }`;

export const environment = {
	production: true,
	hostName: hostName,

	localhost: `${hostName}/api`,
	expressAPI: 'https://express-api-red-nine.vercel.app/api'
};
