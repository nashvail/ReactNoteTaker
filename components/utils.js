module.exports = {	

	getFromStorage(key) {
		return localStorage.getItem(key);
	},

	isEmptyObject(obj) {
		return (Object.keys(obj).length === 0);
	}

};