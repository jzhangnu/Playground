var Product = React.createClass({
  getInitialState: function(){
    return{qty:0};

  },

  buy:function(){
    alert(this.props.price);
    this.setState({qty:this.state.qty + 1});
    this.props.handleTotal(this.props.price);
  },

  show:function(){
    this.props.handleShow(this.props.name);
  },

  render: function(){
  return(
    <div>
      <p>{this.props.name} = ${this.props.price}</p>
      <button onClick={this.buy}>Buy</button>
      <button onClick={this.show}>Show</button>
      <h3>Qty:{this.state.qty} item(s)</h3>
      <hr/>
    </div>
    );
  }
});

var Total = React.createClass({
  render: function(){
    return(
      <div>
       <h3> Total Cash: ${this.props.total}</h3>
      </div>
    );
  }
})

var ProductForm = React.createClass({
  submit: function(e){
    e.preventDefault();
    var product ={
      name:this.refs.name.value,
      price: parseInt(this.refs.price.value)
    }

    this.props.handleCreate(product);
    this.refs.name.value ="";
    this.refs.name.price ="";
  },

  render:function(){
    return (
      <form>
        <input type="text" placeholder="Product Name" ref="name"/>
        <input type="text" placeholder="Product Price" ref="price"/>
        <hr/>
        <button onClick = {this.submit}>Create Product</button>
        </form>
    )
  }
});

var Productlist = React.createClass({
  getInitialState: function(){
    return{
      total: 0,
      productlist:[
        {name:'AA', price: 11},
        {name:'BB', price: 22},
        {name:'CC', price: 33},
        ]
      };
  },

  createProduct: function(product){
    this.setState({
      productlist: this.state.productlist.concat(product)
    })
  },

  calculTotal: function(price){
    this.setState({total: this.state.total + price});
  },

  showProduct: function(name){
    alert("hey what?" + name);
  },
  render: function(){
    var component = this;
    var products = this.state.productlist.map(function(product){
      return(
        <Product name={product.name}
        price={product.price}
        handleShow={component.showProduct}
        handleTotal={component.calculTotal}/>
      );
    });

    return(
      <div>
        <ProductForm handleCreate={this.createProduct}/>
        {products}
        <Total total={this.state.total}/>
      </div>
    );
  }
});

ReactDOM.render(<Productlist/>,document.getElementById('example'));
