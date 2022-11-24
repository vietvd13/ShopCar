function validInputNumber(e) {
	const key = e.keyCode || e.which;

	const LIST_VALIDATE = [69, 187, 189, 190];

	if (LIST_VALIDATE.includes(key)) {
		e.preventDefault();

		return false;
	}
}

export {
	validInputNumber
};
