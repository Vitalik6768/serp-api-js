class Ktable{
  constructor(keyWordData){
    this.keyWordData = keyWordData;
    this.sortDiraction = false;
    this.current_page = 1;
    this.rows = 7;
    this.pagination_element = document.getElementById('pagination2');
    this.createTable();

  }

  createTable(){
    const table = document.getElementById('keyWordTable');

    table.innerHTML=`
          <table class="table table-bordered border border-dark mt-4 table table-hover" id="myktable">
            <thead class="bg-dark text-white ">
            <tr class="text-center">
              <th scope="col" id ="name">KEY WORD</th>
              <th scope="col" id = "lower">COMPATITORS<i onclick="keyTable.sortColumn('compatitors')" class="fa fa-fw fa-sort"></i></th>
            </tr>
        </thead>
        <tbody id="ktabledata">
        </tbody>
          </table>
    `;
    console.log(this.keyWordData);
    this.buildPagination();
  }

  createRows(items, wrapper, rows_per_page, page){
    console.log(items);
    wrapper.innerHTML = "";
    page--;
    let counting = 0

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);
    for(let person of paginatedItems){
      counting ++
      wrapper.innerHTML += `<tr class="text-center"><td id=site-no-${counting}>${person.keyword}</td>
      <td class='ranksKeyWords'>${person.compatitors}
      </td>
      </tr>`
    };
  }

  sortColumn(columnName){
    console.log('ok');
    const dataType = typeof this.keyWordData[0][columnName];
    this.sortDiraction = !this.sortDiraction;
    switch (dataType) {
      case 'number':
      this.sortNumberColumn(this.sortDiraction, columnName);
      break;
    }
    this.createTable(this.keyWordData);
  }

  sortNumberColumn(sort, columnName){
    this.keyWordData = this.keyWordData.sort((p1, p2) =>{
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

    const tableBody = document.getElementById('ktabledata');
  	let button = document.createElement('button');
  	button.innerText = page;

  	if (this.current_page == page) button.classList.add('active');

  	button.addEventListener('click', function () {
  		this.current_page = page;
      this.rows = rows_per_page
      this.keyWordData = items;
      //console.log(this.rows);

      keyTable.createRows(this.keyWordData, tableBody, this.rows, this.current_page);
  		//this.createRows(this.keyWordData, tableBody, this.rows, this.current_page);

  		let current_btn = document.querySelector('.pagenumbers button.active');
  		current_btn.classList.remove('active');

  		button.classList.add('active');
  	});

  	return button;
  }

  buildPagination(){
    const tableBody = document.getElementById('ktabledata');
    //console.log(tableBody);

    this.createRows(this.keyWordData, tableBody, this.rows, this.current_page);
    this.SetupPagination(this.keyWordData, this.pagination_element, this.rows);
  }

}
