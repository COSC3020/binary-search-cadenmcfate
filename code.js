function binarySearch(list, element) {
    if (list.length < 1) { return -1; }
    if (list.length == 1) {
	if (list[0] == element) { return 0; }
	return -1;
    }
    var index = Math.floor(list.length / 2);
    if (element == list[index]) {
	return index;
    }
    else if (element < list[index]) { return binarySearch(list.slice(0,index), element); }
    else { return index + binarySearch(list.slice(index+1,list.length), element); }
}
