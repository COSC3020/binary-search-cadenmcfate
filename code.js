function binarySearch(list, element) {
    if (list.length > 0) {
	var mid = Math.floor(list.length / 2);
	if (element == list[mid]) {
	    return mid;
	} else if (element < list[mid]) {
	    return binarySearch(list.slice(0,mid));
	} else { return binarySearch(list.slice(mid,list.length)); }
    }	
    return -1;
}
