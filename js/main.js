
window.onload = () => {
	const subjects = {
		BCS012: {
			name: "Mathematics",
			difficulty: "hard",
			date: "2/1/20",
			session: "Evening",
			type: "theory"
		},
		BCS040: {
			name: "Statistical Techniques",
			difficulty: "hard",
			date: "19/12/19",
			session: "Evening",
			type: "theory"
		},
		BCS041: {
			name:"Fundamentals of Computer Networks",
			difficulty: "medium",
			date: "3/1/20",
			session: "Evening",
			type: "theory"
		},
		BCS042: {
			name:"Introduction to Algorith Design",
			difficulty: "hard",
			date: "21/12/19",
			session: "Evening",
			type: "theory"
		},
		BCS054: {
			name:"Computer Oriented numerical techniques",
			difficulty: "hard",
			date: "1/1/20",
			session: "Evening",
			type: "theory"
		},
		BCS062: {
			name:"E-Commerce",
			difficulty: "easy",
			date: "17/12/19",
			session: "Evening",
			type: "theory"
		},
		ECO02: {
			name:"Accountancy",
			difficulty:"hard",
			date: "2/1/20",
			session: "Morning",
			type: "theory"
		},
		MCS012: {
			name:"Computer Organisation and Assembly language",
			difficulty: "hard",
			date: "10/12/19",
			session: "Morning",
			type: "theory"
		},
		MCS013: {
			name:"Discrete Mathmatics",
			difficulty: "hard",
			date: "11/12/19",
			session: "Morning",
			type: "theory"
		},
		MCS014: {
			name:"System analysis and Design",
			difficulty: "hard",
			date: "1/1/20",
			session: "Morning",
			type: "theory"
		},
		MCS021: {
			name:"Data and file structures",
			difficulty: "medium",
			date: "14/12/19",
			session: "Morning",
			type: "theory"
		},
		MCS023: {
			name:"Introduction to Database Management",
			difficulty: "easy",
			date: "17/12/19",
			session: "Morning",
			type: "theory"
		},
		MCS024: {
			name:"Object Oriented Technologies and Java Programming",
			difficulty: "easy",
			date: "18/12/19",
			session: "Morning",
			type: "theory"
		},
		BCSL044: {
			name:"Statistical Techniques LAB",
			type: "practical"
		},
		BCSL058: {
			name:"Computer Oriented Numerical Techniques LAB",
			type: "practical"
		}
	};

	var html = '';
	for(const key in subjects) {
		let subject = subjects[key]
		if(subject.type == 'practical') continue;
		html+= '<tr>'
		html+= `<td><a href="papers/${key}/index.html">${key}</a></td>`;
		html+= '<td>'+subject.name+'</td>';
		html+= `<td><span class='difficulty ${subject.difficulty}'></td>`;
		html+= '<td>'+subject.date+'</td>';
		html+= '<td>'+subject.session+'</td>';
		html+= '</tr>';
	}
	document.querySelector('.subjects').innerHTML = html;
}