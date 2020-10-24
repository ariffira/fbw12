let fileData = localStorage.getItem('productsFile');
let products = JSON.parse(fileData);

let fileData3 = localStorage.getItem('usersFile');
let users = JSON.parse(fileData);

let fileData2 = localStorage.getItem('sendLoginUser');
let userLogin = JSON.parse(fileData2);

checkUserLogin();
checkUserAdmin();

usernameId.innerHTML += ' ' + userLogin.username;

function logout() {
  userLogin.username = 'loginplease';
  let fileDataSendLoginUser = JSON.stringify(userLogin);
  localStorage.setItem('sendLoginUser', fileDataSendLoginUser);
  window.location.href = '/';
}

function checkUserLogin() {
  if (userLogin.username == 'loginplease') {
    var txt;
    if (confirm("Press ok to log in")) {
      logout();
    } else {
      checkUserLogin();
    }
  }
}

function checkUserAdmin() {
  if (userLogin.adminCustomer == 'customer') {
    var txt;
    if (confirm("This page is for ADMIN only...... Press ok to go to customer page.")) {
      window.location.href = '/user';
    } else {
      checkUserAdmin();
    }
  }
}

products.map(displayProducts);

function displayProducts(item, index) {
  containerID.innerHTML += `
  <tr>
  <td class="col-sm-1">${item.id}</td>
  <td>${item.product_name}</td>
  <td class="col-sm-2">
    <button class="glyphicon glyphicon-pencil btn btn-warning" onclick="addModalForEdit(${index})" data-toggle="modal" data-target="#myModalEdit"></button>
    
    <button class="glyphicon glyphicon-trash btn btn-danger"></button>
  </td>
</tr>
  `;
}


function addModalForEdit(i) {
  
  var description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ratione porro, id ab laudantium aliquam? Deserunt et suscipit quasi voluptatum ratione libero aut a ex modi dolores, accusantium eos magnam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique molestias sapiente aperiam neque illum ducimus maxime ratione voluptate quae, vel voluptatum consequuntur eos, sequi, fugiat voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ratione porro, id ab laudantium aliquam? Deserunt et suscipit quasi voluptatum ratione libero aut a ex modi dolores, accusantium eos magnam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique molestias sapiente aperiam neque illum ducimus maxime ratione voluptate quae, vel voluptatum consequuntur eos, sequi, fugiat voluptates.`;

  modalIdAll.innerHTML = `
  <div class="modal fade" id="myModalEdit" tabindex="-1" role="dialog" aria-labelledby="myModalLabelEdit">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
                
          <div class="form-group">
            <label>Product Name: </label>
            <input type="text" class="form-control" id="editProductNameId" value="
            ${products[i].product_name}">
          </div>

        </div>
        
        <div class="modal-body">
          <div class="form-group">
            <label>Product Type: </label>
            <input type="text" class="form-control" id="editProductNameId" value="
            ${products[i].product_type}">
          </div>  
          
          <div class="form-group">
            <label>Product Price: </label>
            <input type="text" class="form-control" id="editProductNameId" value="
            ${products[i].price}">
          </div>

          <div class="form-group">
            <label>Date of add: </label>
            <input type="text" class="form-control" id="editProductNameId" value="
            ${products[i].date_of_add}">
          </div>

          <div class="form-group">
            <label>Product Quantity: </label>
            <input type="text" class="form-control" id="editProductNameId" value="
            ${products[i].quantity}">
          </div>

          <div class="form-group">
            <label>Date of expire: </label>
            <input type="text" class="form-control" id="editProductNameId" value="
            ${products[i].date_of_expire}">
          </div>

          <div class="form-group">
            <label>Manufacture country: </label>
            <input type="text" class="form-control" id="editProductNameId" value="
            ${products[i].manufacture_country}">
          </div>

          <div class="form-group">
            <label>Product Size: </label>
            <input type="text" class="form-control" id="editProductNameId" value="
            ${products[i].size}">
          </div>

          <div class="form-group">
            <label>Product Color: </label>
            <input type="text" class="form-control" id="editProductNameId" value="
            ${products[i].color}">
          </div>

          <div class="form-group">
            <label>Product Discount: </label>
            <input type="text" class="form-control" id="editProductNameId" value="
            ${products[i].discount}">
          </div>

          <div class="form-group">
            <label>Product Description: </label>
            <textarea class="form-control" rows="5">${description}</textarea>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close" onclick="">Save</button>
        </div>
      </div>
    </div>
  </div>`;
}