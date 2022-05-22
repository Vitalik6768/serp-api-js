class Table{
  constructor(){
    this.sortDiraction = false;
    this.current_page = 1;
    this.rows = 10;
    this.pagination_element = document.getElementById('pagination');
    
  }

  createTable(){
    const table = document.getElementById('table');

    table.innerHTML=`
          <table class="table table-bordered border border-dark mt-4 table table-hover" id="mytable">
            <thead class="bg-dark text-white ">
            <tr class="text-center">
              <th scope="col" id ="name">URL</th>
              <th scope="col" id = "lower">Lower Rank Keywords<i onclick="n.sortColumn('lowerRank')" class="fa fa-fw fa-sort"></i></th>
              <th scope="col">Higher Rank Keywords <i onclick="n.sortColumn('higherRank')" class="fa fa-fw fa-sort"></i></th>
            </tr>
        </thead>
        <tbody id="tableData">
        </tbody>
          </table>
    `;
    this.buildPagination();
  }

  createRows(items, wrapper, rows_per_page, page){
    wrapper.innerHTML = "";
    page--;
    let counting = 0

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);
    for(let person of paginatedItems){
      counting ++
      wrapper.innerHTML += `<tr class="text-center"><td id=site-no-${counting}>${person.url}</td>
      <td class='ranksKeyWords' onclick='comKywords("${person.url}", "lowerRank")' data-bs-toggle="modal" data-bs-target="#ranksmodel" id='myInput'>${person.lowerRank}
      </td>
      <td class='ranksKeyWords' onclick='comKywords("${person.url}", "higherRank")' data-bs-toggle="modal" data-bs-target="#ranksmodel" id='myInput'>${person.higherRank}</td>
      </tr>`
    };
  }

  sortColumn(columnName){
    console.log('ok');
    const dataType = typeof globalData[0][columnName];
    this.sortDiraction = !this.sortDiraction;
    switch (dataType) {
      case 'number':
      this.sortNumberColumn(this.sortDiraction, columnName);
      break;
    }
    this.createTable(globalData);
  }

  sortNumberColumn(sort, columnName){
    globalData = globalData.sort((p1, p2) =>{
      return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]

    })

  }

  SetupPagination (items, wrapper, rows_per_page) {
  	wrapper.innerHTML = "";

  	let page_count = Math.ceil(items.length / rows_per_page);
  	for (let i = 1; i < page_count + 1; i++) {
  		let btn = this.PaginationButton(i, items, rows_per_page);
  		wrapper.appendChild(btn);
  	}
  }

  PaginationButton (page, items, rows_per_page) {

    const tableBody = document.getElementById('tableData');
  	let button = document.createElement('button');
  	button.innerText = page;

  	if (this.current_page == page) button.classList.add('active');

  	button.addEventListener('click', function () {
  		this.current_page = page;
      this.rows = rows_per_page
      //console.log(this.rows);

      n.createRows(globalData, tableBody, this.rows, this.current_page);
  		//this.createRows(globalData, tableBody, this.rows, this.current_page);

  		let current_btn = document.querySelector('.pagenumbers button.active');
  		current_btn.classList.remove('active');

  		button.classList.add('active');
  	});

  	return button;
  }

  buildPagination(){
    const tableBody = document.getElementById('tableData');
    //console.log(tableBody);

    this.createRows(globalData, tableBody, this.rows, this.current_page);
    this.SetupPagination(globalData, this.pagination_element, this.rows);
  }

}
const n = new Table();
