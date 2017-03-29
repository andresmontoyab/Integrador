
function Play(acorde){
	var Notas = new Tone.MultiPlayer({
	urls:{
		"2AN" : "./audio/2AN.mp3","2AS" : "./audio/2AS.mp3","2BN" : "./audio/2BN.mp3","2CS" : "./audio/2CN.mp3","2CS" : "./audio/2CS.mp3",
		"2DN" : "./audio/2DN.mp3","2DS" : "./audio/2DS.mp3","2EN" : "./audio/2EN.mp3","2FN" : "./audio/2FN.mp3","2FS" : "./audio/2FS.mp3",
		"2GN" : "./audio/2GN.mp3","2GS" : "./audio/2GS.mp3",	
		"3AN" : "./audio/3AN.mp3","3AS" : "./audio/3AS.mp3","3BN" : "./audio/3BN.mp3","3CN" : "./audio/3CN.mp3","3CS" : "./audio/3CS.mp3",
		"3DN" : "./audio/3DN.mp3","3DS" : "./audio/3DS.mp3","3EN" : "./audio/3EN.mp3","3FN" : "./audio/3FN.mp3","3FS" : "./audio/3FS.mp3",
		"3GN" : "./audio/3GN.mp3","3GS" : "./audio/3GS.mp3",
		"4AN" : "./audio/4AN.mp3","4AS" : "./audio/4AS.mp3","4BN" : "./audio/4BN.mp3","4CN" : "./audio/4CN.mp3","4CS" : "./audio/4CS.mp3",
		"4DN" : "./audio/4DN.mp3","4DS" : "./audio/4DS.mp3","4EN" : "./audio/4EN.mp3","4FN" : "./audio/4FN.mp3","4FS" : "./audio/4FS.mp3",
		"4GN" : "./audio/4GN.mp3","4GS" : "./audio/4GS.mp3",
		"5AN" : "./audio/5AN.mp3","5AS" : "./audio/5AS.mp3","5BN" : "./audio/5BN.mp3","5CN" : "./audio/5CN.mp3","5CS" : "./audio/5CS.mp3",
		"5DN" : "./audio/5DN.mp3","5DS" : "./audio/5DS.mp3","5EN" : "./audio/5EN.mp3","5FN" : "./audio/5FN.mp3","5FS" : "./audio/5FS.mp3",
		"5GN" : "./audio/5GN.mp3","5GS" : "./audio/5GS.mp3",	
		"6AN" : "./audio/6AN.mp3","6AS" : "./audio/6AS.mp3","6BN" : "./audio/6BN.mp3","6CN" : "./audio/6CN.mp3","6CS" : "./audio/6CS.mp3",
		"6DN" : "./audio/6DN.mp3","6DS" : "./audio/6DS.mp3","6EN" : "./audio/6EN.mp3","6FN" : "./audio/6FN.mp3","6FS" : "./audio/6FS.mp3",
		"6GN" : "./audio/6GN.mp3","6GS" : "./audio/6GS.mp3",
	},
	volume: 3,
}).toMaster();
	
var Bajos = new Tone.MultiPlayer({
	urls:{		
		"2AN" : "./audio/2AN.mp3","2AS" : "./audio/2AS.mp3","2BN" : "./audio/2BN.mp3","2CS" : "./audio/2CN.mp3","2CS" : "./audio/2CS.mp3",
		"2DN" : "./audio/2DN.mp3","2DS" : "./audio/2DS.mp3","2EN" : "./audio/2EN.mp3","2FN" : "./audio/2FN.mp3","2FS" : "./audio/2FS.mp3",
		"2GN" : "./audio/2GN.mp3","2GS" : "./audio/2GS.mp3",	
		"3AN" : "./audio/3AN.mp3","3AS" : "./audio/3AS.mp3","3BN" : "./audio/3BN.mp3","3CN" : "./audio/3CN.mp3","3CS" : "./audio/3CS.mp3",
		"3DN" : "./audio/3DN.mp3","3DS" : "./audio/3DS.mp3","3EN" : "./audio/3EN.mp3","3FN" : "./audio/3FN.mp3","3FS" : "./audio/3FS.mp3",
		"3GN" : "./audio/3GN.mp3","3GS" : "./audio/3GS.mp3",
		"4AN" : "./audio/4AN.mp3","4AS" : "./audio/4AS.mp3","4BN" : "./audio/4BN.mp3","4CN" : "./audio/4CN.mp3","4CS" : "./audio/4CS.mp3",
		"4DN" : "./audio/4DN.mp3","4DS" : "./audio/4DS.mp3","4EN" : "./audio/4EN.mp3","4FN" : "./audio/4FN.mp3","4FS" : "./audio/4FS.mp3",
		"4GN" : "./audio/4GN.mp3","4GS" : "./audio/4GS.mp3",
		"5AN" : "./audio/5AN.mp3","5AS" : "./audio/5AS.mp3","5BN" : "./audio/5BN.mp3","5CN" : "./audio/5CN.mp3","5CS" : "./audio/5CS.mp3",
		"5DN" : "./audio/5DN.mp3","5DS" : "./audio/5DS.mp3","5EN" : "./audio/5EN.mp3","5FN" : "./audio/5FN.mp3","5FS" : "./audio/5FS.mp3",
		"5GN" : "./audio/5GN.mp3","5GS" : "./audio/5GS.mp3",	
		"6AN" : "./audio/6AN.mp3","6AS" : "./audio/6AS.mp3","6BN" : "./audio/6BN.mp3","6CN" : "./audio/6CN.mp3","6CS" : "./audio/6CS.mp3",
		"6DN" : "./audio/6DN.mp3","6DS" : "./audio/6DS.mp3","6EN" : "./audio/6EN.mp3","6FN" : "./audio/6FN.mp3","6FS" : "./audio/6FS.mp3",
		"6GN" : "./audio/6GN.mp3","6GS" : "./audio/6GS.mp3",
	},
	volume: 7,
}).toMaster();

	console.log(acorde);
	Notas.start("2AN");
}