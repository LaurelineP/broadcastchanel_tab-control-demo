
/* -------------------------------------------------------------------------- */
/*                              BROADCASTCHANNEL                              */
/* -------------------------------------------------------------------------- */
let idTimerClose;
const bc 		= new BroadcastChannel( 'appCom' );
bc.onmessage 	= function(e) {
	idTimerClose && clearTimeout( idTimerClose );
	try {
		if( e.data === 'closeTab' ){
			idTimerClose = setTimeout(() => { window.close() }, 1000 );
		} else return false;
	} catch( err ){
		console.log('[ onmessage ERROR ]', err,)
	}
}


/* -------------------------------------------------------------------------- */
/*                             HANDLER DEFINITION                             */
/* -------------------------------------------------------------------------- */

// Defines click handler: that will open tab w/ same origin
const tabs = [];
function openTab(e){
	console.log('[ openTab ] opening tab...');
	try {
		const url = window.location.href;
		const tab = window.open(url, '_blank');
		tabs.push( tab )
	} catch( err ){
		console.log('[ openTab ERROR ]', err,)
	}
}

// Defines click handler: postMessage to other tab
function postMessage(e){
	console.log('[ postMessage ] postMessaging...');
	bc.postMessage('closeTab');
	console.log('[ postMessage ] sent\n');
}


/* -------------------------------------------------------------------------- */
/*                              DOM EVENT BINDING                             */
/* -------------------------------------------------------------------------- */
document.getElementById('buttonOpenTab').addEventListener('click', openTab );
document.getElementById('buttonPostMsg').addEventListener('click', postMessage );
document.getElementsByTagName('code')[0].innerText = postMessage;
