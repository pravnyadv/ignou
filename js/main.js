
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

	// sort by exam date
	let subjectJson = '{"1577903400001":{"name":"Mathematics","difficulty":"hard","date":"2/1/20","session":"Evening","type":"theory","code":"BCS012"},"1576693800002":{"name":"Statistical Techniques","difficulty":"hard","date":"19/12/19","session":"Evening","type":"theory","code":"BCS040"},"1577989800003":{"name":"Fundamentals of Computer Networks","difficulty":"medium","date":"3/1/20","session":"Evening","type":"theory","code":"BCS041"},"1576866600004":{"name":"Introduction to Algorith Design","difficulty":"hard","date":"21/12/19","session":"Evening","type":"theory","code":"BCS042"},"1577817000005":{"name":"Computer Oriented numerical techniques","difficulty":"hard","date":"1/1/20","session":"Evening","type":"theory","code":"BCS054"},"1576521000006":{"name":"E-Commerce","difficulty":"easy","date":"17/12/19","session":"Evening","type":"theory","code":"BCS062"},"1577903400007":{"name":"Accountancy","difficulty":"hard","date":"2/1/20","session":"Morning","type":"theory","code":"ECO02"},"1575916200008":{"name":"Computer Organisation and Assembly language","difficulty":"hard","date":"10/12/19","session":"Morning","type":"theory","code":"MCS012"},"1576002600009":{"name":"Discrete Mathmatics","difficulty":"hard","date":"11/12/19","session":"Morning","type":"theory","code":"MCS013"},"1577817000010":{"name":"System analysis and Design","difficulty":"hard","date":"1/1/20","session":"Morning","type":"theory","code":"MCS014"},"1576261800011":{"name":"Data and file structures","difficulty":"medium","date":"14/12/19","session":"Morning","type":"theory","code":"MCS021"},"1576521000012":{"name":"Introduction to Database Management","difficulty":"easy","date":"17/12/19","session":"Morning","type":"theory","code":"MCS023"},"1576607400013":{"name":"Object Oriented Technologies and Java Programming","difficulty":"easy","date":"18/12/19","session":"Morning","type":"theory","code":"MCS024"}}';

	const subj = JSON.parse(subjectJson)
	const keys = Object.keys(subj)
	const sorted = keys.sort()
	let html = ''
	sorted.forEach( function(element, index) {
		let subject = subj[element]
		if(subject.type == 'practical') return;
		html+= '<tr>'
		html+= `<td><a href="papers/${subject['code']}/index.html">${subject['code']}</a></td>`;
		html+= '<td>'+subject.name+'</td>';
		html+= `<td><span class='difficulty ${subject.difficulty}'></td>`;
		html+= '<td>'+subject.date+'</td>';
		html+= '<td>'+subject.session+'</td>';
		html+= '</tr>';
	});

	document.querySelector('.subjects').innerHTML = html;
}