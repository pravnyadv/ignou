
window.onload = () => {
	const subjects = {
		BCS012:[
			"Mathmatics"
		],
		BCS040: [
			"Statistical Techniques"
		],
		BCS041: [
			"Fundamentals of Computer Networks"
		],
		BCS042: [
			"Introduction to Algorith Design"
		],
		BCS054: [
			"Computer Oriented numerical techniques"
		],
		BCS062: [
			"E-Commerce"
		],
		BCSL044: [
			"Statistical Techniques LAB"
		],
		BCSL058: [
			"Computer Oriented Numerical Techniques LAB"
		],
		ECO02: [
			"Accountancy"
		],
		MCS012: [
			"Computer Organisation and Assembly language"
		],
		MCS013: [
			"Discrete Mathmatics"
		],
		MCS014: [
			"System analysis and Design"
		],
		MCS021: [
			"Data and file structures"
		],
		MCS023: [
			"Introduction to Database Management"
		],
		MCS024: [
			"Object Oriented Technologies and Java Programming"
		]
	};

	var html = '';
	for(const key in subjects) {
		html+= '<tr>'
		if(key == 'BCSL044' || key == 'BCSL058') {
			html+= `<td>${key}</td>`;
		} else {
			html+= `<td><a href="papers/${key}/index.html">${key}</a></td>`;
		}
		html+= '<td>'+subjects[key][0]+'</td>';
		html+= '</tr>';
	}
	document.querySelector('.subjects').innerHTML = html;
}