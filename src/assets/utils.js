/** ****************************************************************************************************
 * File: utils.js
 * Project: Chronoa
 * @author Nick Soggin <iSkore@users.noreply.github.com> on 01-Jul-2018
 *******************************************************************************************************/
'use strict';

export function pad2( n ) {
	return n < 10 ? `0${ n }` : n;
}

export function randomNumber( maximum ) {
	return ~~( Math.random() * maximum );
}
