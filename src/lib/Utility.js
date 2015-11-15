/* 
  Function receive headerRef and return
  according itemRef 
*/

export function returnListRef(headerRef) {
	const results = headerRef.split('-');
	return `ListItem-${results[1]}`
}
