import { ping } from "minecraft-server-ping";

async function getServerInfo(ip) {
	var split = ip.toString().replace("\n", "").split(":")
	var data = await ping(split[0], split[1] ? split[1] : 25565).catch(e => {
		var en = e.toString()
		if (en.includes("Timed out")) return {error: "Timed out"}; // if (en.includes())
		if (en.includes("ECONNREFUSED")) return {error: "Server offline"};
	})
	return data;
}

function time(date: Date) {
	var hours = date.getHours();
	var mins = date.getMinutes();
	var seconds = date.getSeconds();
	
	return `${hours < 10? "0"+hours:hours}:${mins < 10? "0"+mins:mins}:${seconds < 10? "0"+seconds:seconds}`;
}

export {
	getServerInfo,
	time
}