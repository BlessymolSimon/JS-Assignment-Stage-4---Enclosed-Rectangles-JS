//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px'
//}

function updateStructure(rec1,rec2){
	//write your code
	let rec1_top=parseInt(rec1[top]);
	let rec1_left=parseInt(rec1[left]);
	let rec1_width=parseInt(rec1[width]);
	let rec1_height=parseInt(rec1[height]);
	let rec2_top=parseInt(rec2[top]);
	let rec2_left=parseInt(rec2[left]);
	let rec2_width=parseInt(rec2[width]);
	let rec2_height=parseInt(rec2[height]);
	//check rec1 encloses rec2
	if(rec1_top <= rec2_top && rec1_left <= rec2_left && rec2_left+rec2_width <= rec1_left+rec1_width && rec2_top+rec2_height <= rec1_top+rec1_height)
	{
		return {
			top: (rec2_top-rec1_top)+'px',
			left: (rec2_left-rec1_left)+'px',
			width: rec2[width],
			height: rec2[height]
		};
	}
	else if(rec2_top <= rec1_top && rec2_left <= rec1_left && rec1_left+rec1_width <= rec2_left+rec2_width && rec1_top+rec1_height <= rec2_top+rec2_height)
	{
		return {
			top: (rec1_top-rec2_top)+'px',
			left: (rec1_left-rec2_left)+'px',
			width: rec1[width],
			height: rec1[height]
		};
	}
	else{
		return null;
	}
}

module.exports = updateStructure;
