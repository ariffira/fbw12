function getDetail(productid) {
    console.log(productid);
    $.ajax({
        type: 'GET',
        url: '/product/getDetail',
        data: {
            productid
        },
        success: function (data) {
            console.log(data);
            let productDetail =
                `<div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ${data.product_name}
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Product Price: ${data.price}
              <br>
              Created: ${data.created_at}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>`;
            $('#resultId').html(productDetail);
        }
    })
}

// ajax function to update data
function getUpdate(productid) {
    console.log(productid);
    $.ajax({
        type: 'GET',
        url: '/product/getDetail',
        data: {
            productid
        },
        success: function (data) {
            console.log(data);
            let productDetail =`
            <div class="modal-content">
            <form action="/product/edit" method="POST">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ${data.product_name}
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input type="hidden" name="productid" value="${data._id}">
              <label>Name: </label>
              <input class="form-control" type="text" name="product_name" value="${data.product_name}">
              <br>
              <label>Price: </label>
              <input class="form-control" type="text" name="price" value="${data.price}">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Update</button>
            </div>
            </form>
          </div>`;
          $('#updateFormId').html(productDetail);
        }
    })
}